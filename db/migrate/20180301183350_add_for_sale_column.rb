class AddForSaleColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :inventory_items, :for_sale, :boolean, :default => false, :null => false
  end
end