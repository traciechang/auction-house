class Bid < ApplicationRecord
    validates :user_id, :auction_id, :amount, presence: true

    belongs_to :user
    belongs_to :auction
end