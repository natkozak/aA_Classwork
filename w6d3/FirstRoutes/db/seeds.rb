# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#run this when switching:
#bundle exec rake db:reset db:seed

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

viewers = User.create(
  [
    {username: 'bentley'}, {username: 'nat'}, {username: 'vicki'}, {username: 'mickey_mouse'}
  ]
)

artists = User.create(
  [
    {username: 'da_vinci'}, {username: 'picasso'}, {username: 'van_gogh'}, {username: 'monet'}
  ]
)

Artwork.create(title: 'Mona Lisa', image_url: ':)', artist_id: 5)
Artwork.create(title: 'Self-Portrait', image_url: ':)', artist_id: 6)
Artwork.create(title: 'Starry Night', image_url: ':)', artist_id: 7)
Artwork.create(title: 'Self-Portrait', image_url: ':)', artist_id: 7)
Artwork.create(title: 'Water Lilies', image_url: ':)', artist_id: 8)
Artwork.create(title: 'Bentley Likes Salmon', image_url: ':)', artist_id: 1)

ArtworkShare.create(artwork_id: 5, viewer_id: 1)
ArtworkShare.create(artwork_id: 5, viewer_id: 2)

Comment.create(author_id: 1, artwork_id: 6, body: "It's true!!!")
Comment.create(author_id: 2, artwork_id: 1, body: "Lisa is a cool name.")
Comment.create(author_id: 3, artwork_id: 6, body: "Smells bad!")
Comment.create(author_id: 5, artwork_id: 5, body: "I like mine better.")