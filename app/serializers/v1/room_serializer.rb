module V1
  class RoomSerializer < ActiveModel::Serializer
    attributes :id, :room_category_id, :room_category_name, :house_id, :house_name,
               :area, :door, :window, :door_direction
  end
end
