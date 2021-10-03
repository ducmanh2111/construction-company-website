class ApplicationController < ActionController::API
  include ResponseHandler
  include ExceptionHandler

  respond_to :json

  serialization_scope :current_admin

  before_action :authenticate_admin!
end
