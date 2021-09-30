class ApplicationController < ActionController::API
  serialization_scope :current_admin

  before_action :authenticate_admin!
end
