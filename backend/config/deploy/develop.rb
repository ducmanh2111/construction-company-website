set :application, "dev-ccw"
set :stage, :develop
set :rails_env, :develop
set :user, :deploy
set :deploy_to, "/var/www/dev-ccw-api"

server "103.81.85.143", user: fetch(:user), roles: %w[app db]

set :deploy_ref, ENV["DEPLOY_REF"]
if fetch(:deploy_ref)
  set :branch, fetch(:deploy_ref)
else
  set :branch, "develop"
end

set :ssh_options,
    {
      keys: %w[.ssh/deploy_prd_bms.pem],
      forward_agent: true,
      user: fetch(:user),
      port: 9020
    }

