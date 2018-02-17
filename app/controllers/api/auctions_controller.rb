class Api::AuctionsController < ApplicationController
    def index
        if params[:auc] == "myauctions"
            @auctions = current_user.auctions
        elsif params[:auc] == "mybids"
            @auctions = []
            
            current_user.bids.each do |bid|
                @auctions << Auction.find(bid.auction_id)
            end

            @auctions = @auctions.uniq
        else
            @auctions = Auction.all
        end
    end

    def create
        @auction = Auction.new(auction_params)

        if @auction.save
            render :show
        else
            render json: @auction, status: :unprocessable_entity
        end
    end

    def update
        @auction = Auction.find(params[:id])
        
        if @auction.update(auction_params)
            render :show
        else
            render json: @auction, status: :unprocessable_entity
        end
    end

    private
    def auction_params
        params.require(:auction).permit(:user_id, :inventory_item_id, :starting_bid, :buyout, :duration, :auc)
    end
end
