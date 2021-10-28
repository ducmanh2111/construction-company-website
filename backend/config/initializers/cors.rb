Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"
    resource "/api/v1/*", headers: :any, methods: [:get, :post, :patch, :put, :delete]
    resource "/login", headers: 'x-domain-token', methods: [:post]
  end
end
