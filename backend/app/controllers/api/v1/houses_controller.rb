module Api
  module V1
    class HousesController < BaseController
      def create
        house = House.new(house_params)

        if house.save
          render_created(house, ::V1::HouseSerializer)
        else
          render_unprocessable_entity(house.errors)
        end
      end

      def show
        render_show(house, ::V1::HouseSerializer)
      end

      def update
        if house.update(house_params)
          render_updated(house, ::V1::HouseSerializer)
        else
          render_unprocessable_entity(house.errors)
        end
      end

      def destroy
        house.destroy

        if house.destroyed?
          render_message("Delete success!")
        else
          render_unprocessable_entity(house.errors)
        end
      end

      private

      def house_params
        params.require(:house).permit(:house_category_id, :name, :address, :floors,
                                      :year, :country, :status, :description, :area, :image)
      end

      def house
        @house ||= House.find(params[:id])
      end
    end
  end
end
