module ExceptionHandler
  extend ActiveSupport::Concern

  class AuthenticationError < StandardError; end

  class ValidationError < StandardError; end

  class TokenTimeoutError < StandardError; end

  included do
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::ValidationError, with: :bad_request
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ExceptionHandler::TokenTimeoutError, with: :expired_token_request
  end

  private

  def unauthorized_request(error)
    render_unauthorized(errors: error.message)
  end

  def bad_request(error)
    render_badrequest(errors: error.message)
  end

  def not_found(error)
    render_notfound(errors: error.message)
  end

  def expired_token_request(error)
    render_unauthorized({ errors: error.message, require_refresh: true })
  end
end
