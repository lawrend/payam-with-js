class AddAuthRefToLines < ActiveRecord::Migration[5.0]
  def change
    add_reference :lines, :auth, foreign_key: true
  end
end
