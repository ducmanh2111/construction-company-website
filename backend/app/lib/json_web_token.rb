class JsonWebToken
  HMAC_SECRET = Rails.application.secrets.secret_key_base

  class << self
    def encode(payload, exp = 30.hours.from_now)
      payload[:exp] = exp.to_i
      ::JWT.encode(payload, HMAC_SECRET)
    end

    def decode(token)
      body = ::JWT.decode(token, HMAC_SECRET)[0]
      HashWithIndifferentAccess.new body
    end

    def valid?(payload)
      Time.zone.at(payload["exp"]) > Time.zone.now
    end
  end
end
