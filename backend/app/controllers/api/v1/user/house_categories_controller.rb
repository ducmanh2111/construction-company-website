module Api
  module V1
    module User
      class HouseCategoriesController < ApplicationController
        def index
          house_categories = HouseCategory.all

          render_index(house_categories, {},
                       data_name: "List of House Categories",
                       serializer: ::V1::User::HouseCategorySerializer)
        end

        def show
          render_show(house_category, ::V1::HouseCategorySerializer)
        end

        private

        def house_category
          @house_category ||= HouseCategory.find(params[:id])
        end
      end
    end
  end
end
