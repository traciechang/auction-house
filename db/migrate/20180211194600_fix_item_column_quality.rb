class FixItemColumnQuality < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :quality, :integer
  end
end
