

# @gifts.each do |gift|
#   json.set! gift.id do

json.array! @gifts do 
  # json.id @gifts.id
  json.title @gifts.title
  json.description @gifts.description
  json.guest_id @gifts.guest_id
end