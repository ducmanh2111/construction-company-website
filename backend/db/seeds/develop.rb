# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Begin seeding data in Development environment"
ActiveRecord::Base.transaction do
  ['Chung cư', 'Biệt thự', 'Nhà phố'].each do |name|
    house_category = HouseCategory.find_or_create_by(name: name)
  end

  ['Phòng khách', 'Phòng ngủ', 'Phòng tắm', 'Phòng bếp'].each do |room|
    room_category = RoomCategory.find_or_create_by(name: room)
  end
end
puts "Seeding data in Development environment successfully"
