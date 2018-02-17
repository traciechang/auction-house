class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    after_create :create_inventory

    has_many :auctions, dependent: :destroy
    has_many :bids, dependent: :destroy
    has_one :inventory, dependent: :destroy
    has_many :inventory_items, through: :inventory, dependent: :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest) == (password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
    end

    private
    def create_inventory
        Inventory.create("user_id": self.id, "gold": 100)
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token

        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end

        self.session_token
    end
end