module Api
  module V1
    class RoomsController < BaseController
      def create
        room = Room.new(room_params)
        if room.save
          render_created(room, ::V1::RoomSerializer)
        else
          render_unprocessable_entity(room.errors)
        end
      end

      def show
        render_show(room, ::V1::RoomSerializer)
      end

      def update
        if room.update(room_params)
          render_updated(room, ::V1::RoomSerializer)
        else
          render_unprocessable_entity(room.errors)
        end
      end

      def destroy
        room.destroy

        if room.destroyed?
          render_message("Delete success!")
        else
          render_unprocessable_entity(room.errors)
        end
      end

      private

      def room_params
        params.require(:room).permit(:room_category_id, :house_id, :area, :door, :window, :door_direction)
      end

      def room
        @room ||= Room.find(params[:id])
      end
    end
  end
end
