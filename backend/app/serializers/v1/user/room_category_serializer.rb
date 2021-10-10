module V1
  module User
    class RoomCategorySerializer < ActiveModel::Serializer
      attributes :id, :name
    end
  end
end
