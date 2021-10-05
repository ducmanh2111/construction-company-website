module Api
  module V1
    class RoomCategoriesController < BaseController
      def create
        room_category = RoomCategory.new
        if room_category.update(room_category_params)
          render_created(room_category, ::V1::RoomCategorySerializer)
        else
          render_unprocessable_entity(room_category.errors)
        end
      end

      def show
        render_show(room_category, ::V1::RoomCategorySerializer)
      end

      def update
        if room_category.update(room_category_params)
          render_updated(room_category, ::V1::RoomCategorySerializer)
        else
          render_unprocessable_entity(room_category.errors)
        end
      end

      def destroy
        # rooms = room_category.rooms.where(room_category_id: room_category.id)
        # rooms.update(room_category_id: nil)

        room_category.destroy

        if room_category.destroyed?
          render_message("Delete success!")
        else
          render_unprocessable_entity(room_category.errors)
        end
      end

      private

      def room_category
        @room_category ||= RoomCategory.find(params[:id])
      end

      def room_category_params
        params.require(:room_category).permit(:name)
      end
    end
  end
end
