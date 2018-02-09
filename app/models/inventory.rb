class Inventory < ApplicationRecord
    validates :user_id, :gold, presence: true

    belongs_to :user
    has_many :inventory_items
end