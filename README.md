# CONSTRUCTION COMPANY WEBSITE

## Build Environment

### Development (Docker)

1. Git clone
```
git clone git@github.com:ducmanh2111/construction-company-website.git
```
2. Copy .env.example and database.yml.example 
```
cp backend/.env.example backend/.env
cp backend/config/database.yml.example backend/config/database.yml
```
3. Build and run Docker
```
  docker-compose build
  docker-compose up -d
  # Open new terminal
    docker-compose exec frontend bash
    yarn start
  # Open new terminal
    docker-compose exec backend bash
    bundle install (only run on first build in Development)
    bundle exec rails db:create (only run on first build in Development)
    bundle exec rails db:migrate (only run on first build in Development)
    bundle exec rails db:seed (only run on first build in Development)
    bundle exec rails s -b 0.0.0.0
```
