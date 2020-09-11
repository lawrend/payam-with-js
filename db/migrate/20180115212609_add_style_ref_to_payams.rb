class AddStyleRefToPayams < ActiveRecord::Migration[5.0]
  def change
    # this works in development
    # add_reference :payams, :style, foreign_key: true
    
    # this is for heroku production
    add_reference :payams, :style, index: true
  end
end
