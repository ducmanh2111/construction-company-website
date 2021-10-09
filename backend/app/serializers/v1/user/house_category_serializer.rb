module V1
  module User
    class HouseCategorySerializer < ActiveModel::Serializer
      attributes :id, :name
    end
  end
end
