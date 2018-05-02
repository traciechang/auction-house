class Item < ApplicationRecord
    MIN_LEVEL = 1
    MAX_LEVEL = 120
    QUALITIES = (0..5).to_a
    # TYPES = []

    validates :name, :quality, :level, :item_type, :image_url, presence: true
    validates :quality, inclusion: { in: (0..5) }
    validates :level, inclusion: { in: (MIN_LEVEL..MAX_LEVEL) }
    validates :item_type, inclusion: { in: %w(Axe Cloth Food Junk Leather Mace Mail Plate Reagent Shield Sword) }
end