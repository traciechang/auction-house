class CreateAuctions < ActiveRecord::Migration[5.1]
  def change
    create_table :auctions do |t|
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.integer :starting_bid
      t.integer :buyout
      t.datetime :end_time, null: false

      t.timestamps
    end
    add_index :auctions, :user_id
    add_index :auctions, :item_id
  end
end
