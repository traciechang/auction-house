class Item < ApplicationRecord
    validates :name, :quality, :level, :item_type, :image_url, presence: true
    validates :quality, inclusion: { in: (0..5) }
    validates :level, inclusion: { in: (1..120) }
    validates :item_type, inclusion: { in: %w(Axe Cloth Food Junk Leather Mace Mail Plate Reagent Shield Sword) }
end