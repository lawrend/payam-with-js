# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Style.create([
  {:name => "Funny", :protected => true},
  {:name => "Serious", :protected => true},
  {:name => "Sad", :protected => true}
])

User.create([
  {:username => "wanda", :email => "wanda@wanda.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "saba", :email => "saba@saba.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "worm", :email => "worm@worm.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "dave", :email => "dave@dave.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "maryam", :email => "maryam@maryam.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "nahal", :email => "nahal@nahal.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "zayd", :email => "zayd@zayd.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "zaf", :email => "zaf@zaf.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "habib", :email => "habib@habib.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "grams", :email => "grams@grams.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "nazey", :email => "nazey@nazey.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "unclesomething", :email => "unclesomething@unclesomething.com", :password => "testtest", :password_confirmation => "testtest"},
  {:username => "jodes", :email => "jodes@jodes.com", :password => "testtest", :password_confirmation => "testtest"}
  ])


Line.create([
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 1, :auth_id => 1},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 2, :auth_id => 2},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 3, :auth_id => 3},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 4, :auth_id => 5},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 5, :auth_id => 6},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 6, :auth_id => 7},
  {:text => "this is the text of the test that is tested while texting", :payam_id => 1, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 1, :title => "Test", :counter => 8, :style_id => 1, :current_scribe => 4)


Line.create([
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 1, :auth_id => 1},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 2, :auth_id => 2},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 3, :auth_id => 3},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 4, :auth_id => 5},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 5, :auth_id => 6},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 6, :auth_id => 7},
  {:text => "now we big time, big time big time hands up don't you see this big nine?", :payam_id => 2, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 2, :title => "jack", :counter => 8, :style_id => 2, :current_scribe => 4)

Line.create([
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 1, :auth_id => 1},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 2, :auth_id => 2},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 3, :auth_id => 3},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 4, :auth_id => 5},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 5, :auth_id => 6},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 6, :auth_id => 7},
  {:text => "where did she go? when did she find out? are you going to tell her when you see her?", :payam_id => 3, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 3, :title => "she", :counter => 8, :style_id => 3, :current_scribe => 4)
