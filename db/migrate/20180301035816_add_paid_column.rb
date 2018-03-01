class AddPaidColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :auctions, :paid, :boolean, :default => false, :null => false
  end
end