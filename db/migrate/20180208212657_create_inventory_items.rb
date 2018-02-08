class CreateInventoryItems < ActiveRecord::Migration[5.1]
  def change
    create_table :inventory_items do |t|
      t.integer :item_id, null: false
      t.integer :inventory_id, null: false
      t.timestamps
    end
    add_index :inventory_items, :item_id
    add_index :inventory_items, :inventory_id
  end
end
