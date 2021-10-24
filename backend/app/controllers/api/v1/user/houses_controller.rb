module Api
  module V1
    module User
      class HousesController < ApplicationController
        def index
          houses = params[:house_category_id] ? House.by_house_category(house_category_id) : House.all

          render_index(houses, {},
                       data_name: "List of Houses",
                       serializer: ::V1::User::HouseSerializer)
        end

        def show
          render_show(house, ::V1::User::HouseSerializer)
        end

        private

        def house
          @house ||= House.find(params[:id])
        end
      end
    end
  end
end
