module Api
  module V1
    class HouseCategoriesController < BaseController
      def index
        house_categories = HouseCategory.all

        render_index(house_categories, {},
                     data_name: "List of House Categories",
                     serializer: ::V1::HouseCategorySerializer)
      end

      def create
        house_category = HouseCategory.new
        if house_category.update(house_category_params)
          render_created(house_category, ::V1::HouseCategorySerializer)
        else
          render_unprocessable_entity(house_category.errors)
        end
      end

      def show
        render_show(house_category, ::V1::HouseCategorySerializer)
      end

      def update
        if house_category.update(house_category_params)
          render_updated(house_category, ::V1::HouseCategorySerializer)
        else
          render_unprocessable_entity(house_category.errors)
        end
      end

      def destroy
        houses = house_category.houses.where(house_category_id: house_category.id)
        houses.update(house_category_id: nil)

        house_category.destroy

        if house_category.destroyed?
          render_message("Delete success!")
        else
          render_unprocessable_entity(house_category.errors)
        end
      end

      private

      def house_category
        @house_category ||= HouseCategory.find(params[:id])
      end

      def house_category_params
        params.require(:house_category).permit(:name)
      end
    end
  end
end
