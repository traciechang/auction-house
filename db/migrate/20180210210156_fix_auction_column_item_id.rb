class FixAuctionColumnItemId < ActiveRecord::Migration[5.1]
  def change
    rename_column :auctions, :item_id, :inventory_item_id
    remove_column :items, :quality
  end
end