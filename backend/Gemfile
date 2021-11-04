source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.6"

gem "active_model_serializers"
gem "aws-sdk-s3", require: false
gem "bootsnap", ">= 1.4.2", require: false
gem "devise"
gem "image_processing", ">= 1.2"
gem "jwt"
gem "mysql2"
gem "puma", "~> 4.1"
gem "rack-cors"
gem "rails", "~> 6.0.4", ">= 6.0.4.1"
gem "seed-fu"

group :development, :test do
  gem "pry", "0.13.1"
  gem "pry-rails"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
end

group :development do
  gem "faker", git: "https://github.com/faker-ruby/faker.git", branch: "master"
  gem "listen", "~> 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  # Deploy
  gem 'capistrano', '~> 3.8.1'
  gem 'capistrano-rvm', require: false
  gem "capistrano3-puma"
  gem "capistrano-rails", require: false
  gem "capistrano-bundler", require: false
end

gem "config"
gem "dotenv-rails"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
