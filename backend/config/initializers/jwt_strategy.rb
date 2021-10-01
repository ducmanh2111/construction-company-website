module Devise
  module Strategies
    class JwtStrategy < Base
      def valid?
        request.headers["Authorization"].present?
      end

      def authenticate!
        raise ExceptionHandler::AuthenticationError if no_payload_or_payload_admin_id

        success! Admin.find_by id: payload["admin_id"]
      end

      private

      def no_payload_or_payload_admin_id
        !payload || !payload.key?("admin_id")
      end

      def payload
        bearer_token = request.headers.fetch("Authorization", "").split(" ")
        return nil unless (bearer_token.first || "").casecmp("bearer").zero?

        JsonWebToken.decode(bearer_token.last)
      rescue JWT::ExpiredSignature
        raise ExceptionHandler::TokenTimeoutError
      rescue StandardError
        nil
      end
    end
  end
end
