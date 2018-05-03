class AuctionSearchService
    def initialize(
        item_name: "",
        minimum_item_level: Item::MIN_LEVEL,
        maximum_item_level: Item::MAX_LEVEL,
        item_type: Item::TYPES,
        item_quality: Item::QUALITIES
    )

        @item_name = item_name
        @item_type = item_type
        @item_quality = item_quality
        @minimum_item_level = minimum_item_level
        @maximum_item_level = maximum_item_level
    end
 
    attr_reader :item_name, :item_type, :item_quality, :minimum_item_level, :maximum_item_level

    def call
        Auction.
            with_item_name(item_name).
            with_item_quality(item_quality).
            with_minimum_item_level(minimum_item_level).
            with_maximum_item_level(maximum_item_level).
            with_item_type(item_type)
    end
end