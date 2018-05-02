class AuctionSearchService
    def initialize(attributes)
        @attributes = attributes
    end

    # def initialize(
    #     item_name: "",
    #     minimum_item_level: Item::MIN_LEVEL,
    #     maximum_item_level: Item::MAX_LEVEL,
    #     item_type: "",
    #     item_quality: Item::QUALITIES
    # )
    #     @item_name = item_name
    #     @item_type = item_type
    #     @item_quality = item_quality
    #     @minimum_item_level = minimum_item_level
    #     @maximum_item_level = maximum_item_level
    # end

    attr_reader :attributes
    # attr_reader :item_name, :item_type, :item_quality, :minimum_item_level, :maximum_item_level

    def call
        Auction.
            with_item_name(attributes.fetch(:item_name, "")).
            with_item_quality(attributes.fetch(:item_quality, Item::QUALITIES)).
            with_minimum_item_level(attributes.fetch(:minimum_item_level, Item::MIN_LEVEL)).
            with_maximum_item_level(attributes.fetch(:maximum_item_level, Item::MAX_LEVEL)).
            with_item_type(attributes.fetch(:item_type, ""))

        # Auction.
        #     with_item_name(item_name).
        #     with_item_quality(item_quality).
        #     with_minimum_item_level(minimum_item_level).
        #     with_maximum_item_level(maximum_item_level).
        #     with_item_type(item_type)
    end
end
# =====
# class AuctionSearchService
#     def initialize(
#       item_name: "",
#       item_type: Item::ITEM_TYPES,
#       item_quality: "",
#       min_item_level: Item::MIN_ITEM_LEVEL
#     )
#       @item_name = item_name
#       @item_type = item_type
#       @item_quality = item_quality
#     end
  
#     attr_reader :item_name, :item_type, :item_quality
  
#     def call
#       Auction.
#         with_item_name(item_name).
#         with_item_type(item_type).
#         with_item_quality(item_quality)
#     end
#   end
  
#   class AuctionSearchService
#     def initialize(attributes)
#       attributes = attributes
#     end
  
#     attr_reader :attributes
  
#     def call
#       Auction.
#         with_item_name(attributes.fetch(:item_name, "")).
#         with_item_type(attributes.fetch(:item_type, "")).
#         # magic number
#         with_min_item_level(attributes.fetch(:min_item_level, Item::MIN_ITEM_LEVEL)).
#         with_max_item_level(attributes.fetch(:max_item_level, Item::MAX_ITEM_LEVEL)).
#         with_item_quality(attributes.fetch(:item_quality, "")).
#         with_item_type(attributes.fetch(:item_type, Item::ITEM_TYPES))
#     end
#   end
  
#   # auctions_controller.rb
  
#   # undefined method downcase for nil
#   # scope (name) {
#   # name.downcase
#   # }
  
#   def index
#     # params = { item_name: 'sword', item_type: '' }
#     # params = { item_name: 'sword' }
#     item_params
#   end
  
#   private
  
#   def item_params
#     params.slice(:item_name, :item_type, :item_quality)
#   end