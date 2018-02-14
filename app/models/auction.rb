class Auction < ApplicationRecord
    attr_reader :duration

    validates :user_id, :inventory_item_id, :end_time, presence: true

    after_initialize :ensure_end_time

    belongs_to :user
    has_many :bids
    belongs_to :inventory_item

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