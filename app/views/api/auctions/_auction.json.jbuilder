json.extract! auction, :id, :user_id, :inventory_item_id, :starting_bid, :buyout, :end_time

json.item do
    json.partial! Item.find(auction.inventory_item.item_id), partial: 'api/items/item', as: :item
end

json.user do
    json.partial! User.find(auction.user_id), partial: 'api/users/user', as: :user
end

if auction.bids.last
    json.bid do
        json.partial! auction.bids.last, partial: 'api/bids/bid', as: :bid
    end
end