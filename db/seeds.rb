# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

puts "Begin seeding data in Development environment"
ActiveRecord::Base.transaction do
  ['Chung cư', 'Biệt thự', 'Nhà phố'].each do |name|
    house_category = HouseCategory.find_or_create_by(name: name)
    3.times do
      downloaded_image = open("https://via.placeholder.com/600/92c952")
      house = house_category.houses.find_or_create_by(
        name: Faker::Nation.capital_city,
        address: Faker::Address.street_address,
        floors: Faker::Number.within(range: 1..10),
        year: Faker::Number.within(range: 2018..2021),
        country: Faker::Address.country,
        status: ['completed', 'in progress'].sample,
        description: Faker::Marketing.buzzwords,
        area: Faker::Number.within(range: 60..150),
      )
      house.image.attach(io: downloaded_image  , filename: "foo.jpg")
    end
  end

  ['Phòng khách', 'Phòng ngủ', 'Phòng tắm', 'Phòng bếp'].each do |room|
    room_category = RoomCategory.find_or_create_by(name: room)
  end

  House.all.each do |house|
    (1..4).each do |room_category_id|
      downloaded_image = open("https://via.placeholder.com/600/92c952")
      room = house.rooms.find_or_create_by(
        room_category_id: room_category_id,
        area: Faker::Number.within(range: 15..40),
        door: Faker::Number.within(range: 0..4),
        window: Faker::Number.within(range: 0..3),
        door_direction: ['Đông', 'Tây', 'Nam', 'Bắc'].sample
      )
      room.image.attach(io: downloaded_image  , filename: "bar.jpg")
    end
  end
end
puts "Seeding data in Development environment successfully"
