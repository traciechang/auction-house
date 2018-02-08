class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.integer :user_id, null: false
      t.integer :gold, null: false
      t.timestamps
    end
    add_index :inventories, :user_id
  end
end
