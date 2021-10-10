module Api
  module V1
    module User
      class RoomCategoriesController < ApplicationController
        def index
          room_categories = RoomCategory.all

          render_index(room_categories, {},
                       data_name: "List of Room Categories",
                       serializer: ::V1::User::RoomCategorySerializer)
        end

        def show
          render_show(room_category, ::V1::RoomCategorySerializer)
        end

        private

        def room_category
          @room_category ||= RoomCategory.find(params[:id])
        end
      end
    end
  end
end
