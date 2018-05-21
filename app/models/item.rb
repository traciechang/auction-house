class Item < ApplicationRecord
    MIN_LEVEL = 1
    MAX_LEVEL = 120
    QUALITIES = (0..5).to_a
    TYPES = %w(Axe Cloth Food Junk Leather Mace Mail Plate Reagent Shield Sword)

    validates :name, :quality, :level, :item_type, :image_url, presence: true
    validates :quality, inclusion: { in: (0..5) }
    validates :level, inclusion: { in: (MIN_LEVEL..MAX_LEVEL) }
    validates :item_type, inclusion: { in: TYPES }

    # scope :with_name, -> (name) {
    #     Item.where("LOWER(name) LIKE ?", "%#{name.downcase}%")
    # }

    # scope :with_quality, -> (quality) {
    #     Item.where(quality: quality).pluck(:id)
    # }

    # scope :with_minimum_level, -> (level_min) {
    #     if level_min != ""
    #         Item.where("level >= ?", level_min)
    #     end
    # }

    # scope :with_maximum_level, -> (level_max) {
    #     if level_max != ""
    #         Item.where("level <= ?", level_max)
    #     end
    # }

    # scope :with_type, -> (item_type) {
    #     Item.where(item_type: item_type)
    # }
end