require_relative '../../services/auction_search_service'
require_relative '../../services/item_search_service'

class Api::AuctionsController < ApplicationController
    def index
        if params[:auc] == "myauctions"
            @auctions = current_user.auctions
        elsif params[:auc] == "mybids"
            auction_ids = current_user.bids.pluck(:auction_id).uniq
            @auctions = Auction.where(id: auction_ids)
        else
            # @auctions = AuctionSearchService.new(item_params.to_h.symbolize_keys).call
            # item_ids = ItemSearchService.new(item_params.to_h.symbolize_keys).call
            # inv_item_ids = InventoryItem.where(item_id: item_ids)
            # @auctions = Auction.where(inventory_item_id: inv_item_ids)
            @auctions = ItemSearchService.new(item_params.to_h.symbolize_keys).call
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

    def item_params
        params.permit(:item_name, :minimum_item_level, :maximum_item_level, :item_type, :item_quality)
    end
end

# *****************************************************

# Alternative Auction Search

    # @auctions = Auction.all
    # filtering_params.each do |key, val|
    #     @auctions = @auctions.public_send(key, val) if val.present?
    # end

    # def filtering_params
    #     params.slice(:with_item_name, :with_minimum_item_level, :with_maximum_item_level, :with_item_type, :with_item_quality)
    # end