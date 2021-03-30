

# json.gifts do
  json.extract! @gift, :title, :description
# end

# @gifts.each do |gift|
#   json.set! gift.id do
#     json.extract! @gifts, :title, :description
#   end
# end