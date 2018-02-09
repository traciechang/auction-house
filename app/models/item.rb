class Item < ApplicationRecord
    validates :name, :quality, :level, :item_type, :image_url, presence: true
    validates :quality, inclusion: { in: %w(Poor Common Uncommon Rare Epic Legendary) }
    validates :level, inclusion: { in: (1..120) }
    validates :item_type, inclusion: { in: %w(Bag Cloth Food Junk Leather Mail Mount Plate Potion Shield) }
end