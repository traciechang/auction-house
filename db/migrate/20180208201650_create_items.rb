class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :rarity, null: false
      t.integer :level, null: false
      t.string :type, null: false
      t.string :image_url, null: false
      t.timestamps
    end
    add_index :items, :name
  end
end