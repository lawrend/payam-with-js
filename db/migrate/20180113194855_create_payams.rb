class CreatePayams < ActiveRecord::Migration[5.0]
  def change
    create_table :payams do |t|
      t.integer :counter
      t.string :title

      t.timestamps
    end
  end
end
