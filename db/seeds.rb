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
  {:name => "Sad", :protected => true}, 
  {:name => "Random", :protected => true}
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

Payam.create(:id => 1, :title => "test", :counter => 8, :style_id => 1, :current_scribe => 4)


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

Payam.create(:id => 3, :title => "she", :counter => 8, :style_id => 1, :current_scribe => 4)

Line.create([
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 1, :auth_id => 1},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 2, :auth_id => 2},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 3, :auth_id => 3},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 4, :auth_id => 5},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 5, :auth_id => 6},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 6, :auth_id => 7},
  {:text => "this is the text 4 of the test that is tested while texting", :payam_id => 4, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 4, :title => "fear", :counter => 8, :style_id => 1, :current_scribe => 4)

Line.create([
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 1, :auth_id => 1},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 2, :auth_id => 2},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 3, :auth_id => 3},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 4, :auth_id => 5},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 5, :auth_id => 6},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 6, :auth_id => 7},
  {:text => "this is the text 5 of the test that is tested while texting", :payam_id => 5, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 5, :title => "strive", :counter => 8, :style_id => 3, :current_scribe => 4)

Line.create([
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 1, :auth_id => 1},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 2, :auth_id => 2},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 3, :auth_id => 3},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 4, :auth_id => 5},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 5, :auth_id => 6},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 6, :auth_id => 7},
  {:text => "this is the text 6 of the test that is tested while texting", :payam_id => 6, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 6, :title => "hicks", :counter => 8, :style_id => 3, :current_scribe => 4)

Line.create([
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 1, :auth_id => 1},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 2, :auth_id => 2},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 3, :auth_id => 3},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 4, :auth_id => 5},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 5, :auth_id => 6},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 6, :auth_id => 7},
  {:text => "this is the text 7 of the test that is tested while texting", :payam_id => 7, :count => 7, :auth_id => 8},
  ])

Payam.create(:id => 7, :title => "brainy", :counter => 8, :style_id => 3, :current_scribe => 4)


Line.create([
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 1, :auth_id => 1},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 2, :auth_id => 2},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 3, :auth_id => 3},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 4, :auth_id => 5},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 5, :auth_id => 6},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 6, :auth_id => 7},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 7, :auth_id => 8},
  {:text => "this is the text 8 of the test that is tested while texting", :payam_id => 8, :count => 8, :auth_id => 4},
  ])

Payam.create(:id => 8, :title => "eighty", :counter => 8, :style_id => 3, :current_scribe => nil)


Line.create([
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 1, :auth_id => 1},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 2, :auth_id => 2},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 3, :auth_id => 3},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 4, :auth_id => 5},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 5, :auth_id => 6},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 6, :auth_id => 7},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 7, :auth_id => 8},
  {:text => "this is the text 9 of the test that is tested while texting", :payam_id => 9, :count => 8, :auth_id => 4},
  ])

Payam.create(:id => 9, :title => "ninety", :counter => 8, :style_id => 3, :current_scribe => nil)


Line.create([
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 1, :auth_id => 1},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 2, :auth_id => 2},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 3, :auth_id => 3},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 4, :auth_id => 5},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 5, :auth_id => 6},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 6, :auth_id => 7},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 7, :auth_id => 8},
  {:text => "this is the text 10 of the test that is tested while texting", :payam_id => 10, :count => 8, :auth_id => 4},
  ])

Payam.create(:id => 10, :title => "tenner", :counter => 8, :style_id => 3, :current_scribe => nil)

