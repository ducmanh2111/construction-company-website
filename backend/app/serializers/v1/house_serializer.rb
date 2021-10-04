module V1
  class HouseSerializer < ActiveModel::Serializer
    attributes :id, :house_category_id, :house_category_name, :name, :address, :floors,
               :year, :country, :status, :description, :area
  end
end
