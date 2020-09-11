class AddPayamRefToLines < ActiveRecord::Migration[5.0]
  def change
    # this works in development
    # add_reference :lines, :payam, foreign_key: true
    

    # this is for heroku production
    add_reference :lines, :payam, index: true
  end
end
