
# @gifts.each do |gift|
#   json.set! gift.id do

json.array! @guests do |guest|
  # json.id @gifts.id
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end