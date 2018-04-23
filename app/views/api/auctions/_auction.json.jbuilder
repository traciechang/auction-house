json.extract! auction, :id, :user_id, :inventory_item_id, :starting_bid, :buyout, :end_time

json.item do
    json.partial! auction.inventory_item.item, partial: 'api/items/item', as: :item
end

json.user do
    json.extract! auction.user, :username
end

json.item_id do
    json.extract! auction.inventory_item.item, :id
end

if auction.bids.last
    json.bid do
        json.partial! auction.bids.last, partial: 'api/bids/bid', as: :bid
        json.extract! auction.bids.last.user, :username
    end
end