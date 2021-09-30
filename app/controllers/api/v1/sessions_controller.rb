module Api
  module V1
    class SessionsController < Devise::SessionsController
      include ResponseHandler

      wrap_parameters :admin, include: [:login, :password], format: [:json, :multipart_form, :url_encoded_form]
      respond_to :json

      before_action :configure_permitted_parameters
      skip_before_action :verify_signed_out_user, only: :destroy

      def create
        resource = warden.authenticate!(auth_options.merge(store: false, recall: "#{controller_path}#failure"))
        refresh_token = resource.create_refresh_token!
        access_token = JsonWebToken.encode(admin_id: resource.id)
        render_ok({ access_token: access_token, refresh_token: refresh_token.crypted_token })
      end

      def destroy
        current_admin.refresh_token&.destroy!
        super
      rescue ExceptionHandler::TokenTimeoutError
        respond_to_on_destroy
      rescue ExceptionHandler::AuthenticationError => e
        render_unauthorized(errors: e.message)
      end

      def failure
        render_unauthorized({ message: I18n.t("devise.failure.invalid", authentication_keys: "user_name") })
      end

      private

      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_in) { |u| u.permit(:login, :password) }
      end

      def respond_to_on_destroy
        head :ok
      end
    end
  end
end
