class InventoryItem < ApplicationRecord
    validates :item_id, :inventory_id, presence: true

    belongs_to :inventory
    belongs_to :item
    has_one :auction, dependent: :destroy
end