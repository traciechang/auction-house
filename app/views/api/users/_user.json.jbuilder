json.extract! user, :id, :username

json.items do
    inventory_items.each do |inv_item|
        json.set! inv_item.item_id do
            # json.partial! Item.find(inv_item.item_id), partial: 'api/items/item', as: :item
            json.partial! partial: 'api/items/item', formats: [:json], locals: { item: inv_item.item }
        end
    end
end

json.inventory do
    json.extract! user.inventory, :id, :gold
end

# json.inventory_items do
#     json.array! user.inventory_items, partial: 'api/inventory_items/inventory_item', as: :inventory_item
# end

json.inventory_items do
    inventory_items.each do |inv_item|
        json.set! inv_item.id do
            json.partial! partial: 'api/inventory_items/inventory_item', formats: [:json], locals: { inventory_item: inv_item }
        end
    end
end