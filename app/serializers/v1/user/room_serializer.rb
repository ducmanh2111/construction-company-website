module V1
  module User
    class RoomSerializer < ActiveModel::Serializer
      attributes :id, :house_id, :area, :door, :window, :door_direction
    end
  end
end
