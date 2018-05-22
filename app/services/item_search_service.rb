class ItemSearchService
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
        item_ids = Item.
            with_name(item_name).
            with_quality(item_quality).
            with_minimum_level(minimum_item_level).
            with_maximum_level(maximum_item_level).
            with_type(item_type).ids

        inventory_item_ids = InventoryItem.where(item_id: item_ids).ids
        Auction.where(inventory_item_id: inventory_item_ids)
    end
end