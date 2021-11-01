module V1
  module User
    class RoomSerializer < ActiveModel::Serializer
      attributes :id, :house_id, :area, :door, :window, :door_direction, :room_category_name, :house_name, :image_url
    end
  end
end
