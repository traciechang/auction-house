class Auction < ApplicationRecord
    attr_reader :duration

    validates :user_id, :inventory_item_id, :end_time, :duration, presence: true

    after_initialize :ensure_end_time
    before_update :generate_end_time

    belongs_to :user
    has_many :bids, dependent: :destroy
    belongs_to :inventory_item

    scope :with_item_name, -> (name) {
        item_ids = Item.where("LOWER(name) LIKE ?", "%#{name.downcase}%")
        inv_item_ids = InventoryItem.where(item_id: item_ids)
        where(inventory_item_id: inv_item_ids)
    }

    scope :with_item_quality, -> (quality) {
        item_ids = Item.where(quality: quality).pluck(:id)
        inv_item_ids = InventoryItem.where(item_id: item_ids)
        where(inventory_item_id: inv_item_ids)
     }

     scope :with_minimum_item_level, -> (level_min) {
        if level_min != ""
            item_ids = Item.where("level >= ?", level_min)
            inv_item_ids = InventoryItem.where(item_id: item_ids)
            where(inventory_item_id: inv_item_ids)
        end
     }

     scope :with_maximum_item_level, -> (level_max) {
        if level_max != ""
            item_ids = Item.where("level <= ?", level_max)
            inv_item_ids = InventoryItem.where(item_id: item_ids)
            where(inventory_item_id: inv_item_ids)
        end
     }

     scope :with_item_type, -> (item_type) {
        item_ids = Item.where(item_type: item_type)
        inv_item_ids = InventoryItem.where(item_id: item_ids)
        where(inventory_item_id: inv_item_ids)
     }

    def duration=(duration)
        @duration = duration
    end

    private
    def ensure_end_time
        generate_end_time unless self.end_time
    end

    def generate_end_time
        # duration is in hours. 60min*60secs*number of hours
        self.end_time = Time.now + duration.to_i * 3600
    end
end