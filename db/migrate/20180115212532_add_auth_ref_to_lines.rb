class AddAuthRefToLines < ActiveRecord::Migration[5.0]
  def change
    # this works in development
    # add_reference :lines, :auth, foreign_key: true

    # trying this for heroku production
    add_reference :lines, :auth, index: true
  end
end
