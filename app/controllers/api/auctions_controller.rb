class Api::AuctionsController < ApplicationController
    def index
        if params[:auc] == "myauctions"
            @auctions = current_user.auctions
        elsif params[:auc] == "mybids"
            auction_ids = current_user.bids.pluck(:auction_id).uniq
            @auctions = Auction.where(id: auction_ids)
        else
            @auctions = Auction.all
            filtering_params.each do |key, val|
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

    def filtering_params
        params.slice(:with_item_name, :with_minimum_item_level, :with_maximum_item_level, :with_item_type, :with_item_quality)
    end

    # def item_params
        # params.slice(:name, :minimum_item_level, :maximum_item_level, :item_type, :quality)
    # end
end

# *****************************************************
# Alternative Auction Search

# def index
#     if params[:auc] == "myauctions"
#         @auctions = current_user.auctions
#     elsif params[:auc] == "mybids"
#         auction_ids = current_user.bids.pluck(:auction_id).uniq
#         @auctions = Auction.where(id: auction_ids)
#     else
#       @auctions = AuctionSearch.new(filter_params).search
#     end
#     @auctions = @auctions.includes(inventory_item: :item).includes(:user).includes(bids: :user)
# end

# app/services/auction_search.rb

# class AuctionSearch
#     def initialize(attributes)
#         @attributes = attributes
#     end

#     attr_reader :attributes

#     def search
#         auctions = Auction.all

#         if attributes[:item_name]
#         auctions.with_item_name(attributes[:item_name])
#         end

#         if attributes[:item_level_min]
#         auctions.with_min_level(attributes[:item_name])
#         end

#         if attributes(:limit)
#         auctions.limit(attributes[:limit])
#         end
#     end
# end

# class AuctionSearch
#     def initialize(attributes)
#         @attributes = attributes
#     end

#     attr_reader :attributes

#     def call
#         items = Item
#         attributes.each do |column, val|
#             items = items.where(column => val)
#         end
#         inventory_items = InventoryItem.where(item_id: items.ids)
#         Auction.where(:inventory_item_id: inventory_items)
#     end
# end

# class AuctionSearch
#     def initialize(attributes)
#         @attributes = attributes
#     end

#     attr_reader :attributes

#     def call
#         Auction.
#             with_item_name(attributes[:item_name]).
#             with_item_quality(attributes[:item_quality]).
#             with_minimum_item_level(attributes[:minimum_item_level]).
#             with_maximum_item_level(attributes[:maximum_item_level]).
#             with_min_level(attributes[:minimum_item_level])
#     end
# end

# screenshot of scopes, and screenshot of above method
# talk about reasoning for why you prefer an explicit approach and chaining scopes, vs dynamically using `public_send`, or using conditionals
# talk about how this is easier to understand, although more verbose, and is very straight forward to modify or add to if you wanted more scopes in the future