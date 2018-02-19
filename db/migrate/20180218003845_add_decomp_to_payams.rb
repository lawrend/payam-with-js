class AddDecompToPayams < ActiveRecord::Migration[5.1]
  def change
    add_column :payams, :decomp, :boolean, :default => false
  end
end
