source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

gem 'rails', '~> 6.0.4', '>= 6.0.4.1'
gem 'mysql2'
gem 'puma', '~> 4.1'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'devise'
gem 'jwt'
gem 'active_model_serializers'
gem 'rack-cors'
gem 'seed-fu'

group :development, :test do
  gem "rubocop"
  gem "rubocop-rails"
  gem "rubocop-performance"
  gem "pry-rails"
  gem "pry", "0.13.1"
end

group :development do
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end

gem "config"
gem "dotenv-rails"
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]