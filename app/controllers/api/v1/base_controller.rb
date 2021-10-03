module Api
  module V1
    class BaseController < ApplicationController
      serialization_scope :current_admin
      before_action :authenticate_admin!
    end
  end
end
