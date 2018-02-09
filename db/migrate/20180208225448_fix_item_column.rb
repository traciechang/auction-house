class FixItemColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :items, :rarity, :quality
  end
end
