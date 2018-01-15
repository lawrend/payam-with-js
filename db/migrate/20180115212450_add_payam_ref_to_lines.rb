class AddPayamRefToLines < ActiveRecord::Migration[5.0]
  def change
    add_reference :lines, :payam, foreign_key: true
  end
end
