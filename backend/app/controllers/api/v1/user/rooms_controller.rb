module Api
  module V1
    module User
      class RoomsController < ApplicationController
        def index
          rooms = params[:room_category_id] ? Room.by_room_category(params[:room_category_id]) : Room.all

          render_index(rooms, {},
                       data_name: "List of Rooms",
                       serializer: ::V1::User::RoomSerializer)
        end

        def show
          render_show(room, ::V1::User::RoomSerializer)
        end

        private

        def room
          @room ||= Room.find(params[:id])
        end
      end
    end
  end
end
