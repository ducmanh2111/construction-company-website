class ApplicationController < ActionController::API
  include ResponseHandler
  include ExceptionHandler

  respond_to :json
end
