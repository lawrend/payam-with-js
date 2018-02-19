class AddOrigToPayams < ActiveRecord::Migration[5.1]
  def change
    add_column :payams, :orig, :integer
  end
end
