class CreateStyles < ActiveRecord::Migration[5.0]
  def change
    create_table :styles do |t|
      t.string :name
      t.boolean :protected, :default => false

      t.timestamps
    end
  end
end
