# README

This app was built as an exercise to strengthen skills in JS, JQuery, Rails, and CSS.

Design-wise it is HORRIBLE, but that's not the point. The number on extraneous features, from glowing red words to making sure you can cycle through a list forwards and backwards, including when you get to the ends--those are the kinds of things this app was about.

It is using Rails 5.2.4.2. 

Fork the repo, clone it, cd into the directory. Run `bundle install` to install gems and `rails s` in the terminal to start a rails server.

EXAMPLE ACCOUNT - SHOULD ALREADY BE CREATED - USE IT
user email: 'dave@dave.com'
password: 'testtest'

Licensed under MIT.

PAYAM - HOW IT WORKS
A Payam is a collaborative poem. One person begins by picking a title, a style, and writing a first line of ten to twenty words.

The next author is chosen at random. However, only the last 5 words of the previous line are visible. When the line is completed another author is chosen at random.

A payam is complete once it has eight lines. It is then visible to anyone.

RANDO
There is a 'rando' link on the player home page which, when clicked, generates a payam using random words from a word list. The random payam has ten words per line and can be decomped just like other payams. 

DECOMPS
Below each completed payam is a 'decomp' button which, when pressed, randomly removes one word from each line of the payam. Keep pressing and they keep vanishing (down to one word per line). A decomp can be saved in its current state at any time, and will be added to the bottom of the original payam show page. 

