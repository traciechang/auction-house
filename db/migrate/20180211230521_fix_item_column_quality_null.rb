class FixItemColumnQualityNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :items, :quality, false
  end
end
