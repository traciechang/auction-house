json.extract! user, :id, :username

# json.items do
#     user.inventory_items.each do |inv_item|
#         json.set! inv_item.item_id do
#             json.partial! Item.find(inv_item.item_id), partial: 'api/items/item', as: :item
#         end
#     end
# end