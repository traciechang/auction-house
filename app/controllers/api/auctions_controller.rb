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

# ===

# def index
#     if params[:auc] == "myauctions"
#         @auctions = current_user.auctions
#     elsif params[:auc] == "mybids"
#         auction_ids = current_user.bids.pluck(:auction_id).uniq
#         @auctions = Auction.where(id: auction_ids)
#     else
#       @auctions = AuctionSearch.new(filter_params).search
#         # @auctions = Auction.all

#         # filtering_params(params).each do |key, val|
#             # @auctions = @auctions.public_send(key, val) if val.present?
#         # end
#     end
#     @auctions = @auctions.includes(inventory_item: :item).includes(:user).includes(bids: :user)
# end

# app/services/auction_search.rb

# class AuctionSearch
# def initialize(attributes)
# @attributes = attributes
# end

# attr_reader :attributes

# # def search
# # auctions = Auction.all

# # if attributes[:item_name]
#   # auctions.with_item_name(attributes[:item_name])
# # end

# # if attributes[:item_level_min]
#   # auctions.with_min_level(attributes[:item_name])
# # end

# # if attributes(:limit)
#   # auctions.limit(attributes[:limit])
# # end
# # end

# def search
# items = Item.all

# attributes.each do |column, val|
#   items = items.where(column => val)
# end

# inventory_items = InventoryItem.where(item_id: items.ids)
# Auction.where(inventory_item_id: inventory_items.ids)
# end
# end

# scope naming suggestions for auction.rb

# Auction.with_item_name('hammer')
#  Auction.with_quality()
#  Auction.with_minimum_level(level)
#  Auction.with_max_level(level)
#  Auction.with_item_type('weapon')
#  Auction.ended