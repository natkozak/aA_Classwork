# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all
CatRentalRequest.destroy_all

tubbles = Cat.create(birth_date: '2001-02-03', color: 'brown', name: 'Tubbles', sex: 'F', description: 'Very skinny!') 

# id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null

request1 = CatRentalRequest.create(cat_id: tubbles.id, start_date: '2021-01-01', end_date: '2021-02-14', status: 'PENDING')

request2 = CatRentalRequest.create(cat_id: tubbles.id, start_date: '2021-02-04', end_date: '2021-03-07', status: 'PENDING')

request3 = CatRentalRequest.create(cat_id: tubbles.id, start_date: '2021-03-07', end_date: '2021-05-08', status: 'PENDING')

request4 = CatRentalRequest.create(cat_id: tubbles.id, start_date: '2021-06-07', end_date: '2021-09-08', status: 'PENDING')
