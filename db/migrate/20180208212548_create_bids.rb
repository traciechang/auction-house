class CreateBids < ActiveRecord::Migration[5.1]
  def change
    create_table :bids do |t|
      t.integer :user_id, null: false
      t.integer :auction_id, null: false
      t.integer :amount, null: false
      t.timestamps
    end
    add_index :bids, :user_id
    add_index :bids, :auction_id
  end
end
