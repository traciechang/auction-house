class InventoryItem < ApplicationRecord
    validates :item_id, :inventory_id, presence: true

    belongs_to :inventory
end