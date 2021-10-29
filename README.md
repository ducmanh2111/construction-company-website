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
  # Open new terminal (for User)
    docker-compose exec frontend bash
    yarn install
    yarn start
  # Open new terminal (for Admin)
    docker-compose exec frontend-admin bash
    yarn install
    yarn start
  # Open new terminal (for Backend)
    docker-compose exec backend bash
    bundle install (only run on first build in Development)
    bundle exec rails db:create (only run on first build in Development)
    bundle exec rails db:migrate (only run on first build in Development)
    bundle exec rails db:seed (only run on first build in Development)
    bundle exec rails db:seed_fu (only run on first build in Development to create admin)
    bundle exec rails s -b 0.0.0.0
```
4. Endpoint information:

| Section |  Endpoint |
| --------- |:---|
| Api |http://localhost:4001|
| Admin |http://localhost:3001|
| User |http://localhost:3000|
