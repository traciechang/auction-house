class Api::AuctionsController < ApplicationController
    def index
        if params[:auc] == "myauctions"
            @auctions = current_user.auctions
        elsif params[:auc] == "mybids"
            auction_ids = current_user.bids.pluck(:auction_id).uniq
            @auctions = Auction.where(id: auction_ids)
        else
            @auctions = Auction.all
            filtering_params(params).each do |key, val|
                @auctions = @auctions.public_send(key, val) if val.present?
            end
        end
        @auctions = @auctions.includes(inventory_item: :item).includes(:user).includes(bids: :user)
    end

    def show
        @auction = Auction.find(params[:id])
    end

    def create
        @auction = Auction.new(auction_params)

        if @auction.save
            render :show
        else
            render json: @auction.errors.full_messages, status: 422
        end
    end

    def update
        @auction = Auction.find(params[:id])
        
        if @auction.update(auction_params)
            ActionCable.server.broadcast 'auction_channel',
                id: @auction.id,
                end_time: @auction.end_time
            render :show
        else
            render json: @auction, status: :unprocessable_entity
        end
    end

    private
    def auction_params
        params.require(:auction).permit(:user_id, :inventory_item_id, :starting_bid, :buyout, :duration, :paid, :auc)
    end

    def filtering_params(params)
        params.slice(:item_name, :item_level_min, :item_level_max, :item_type, :item_quality)
    end
end
