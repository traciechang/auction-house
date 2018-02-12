json.extract! auction, :id, :user_id, :inventory_item_id, :starting_bid, :buyout, :end_time

json.item do
    json.partial! Item.find(auction.inventory_item.item_id), partial: 'api/items/item', as: :item
end