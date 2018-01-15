class AddCurrentScribeToPayams < ActiveRecord::Migration[5.0]
  def change
    add_column :payams, :current_scribe, :integer
  end
end
