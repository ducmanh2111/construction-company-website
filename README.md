# CONSTRUCTION COMPANY WEBSITE

## Build Environment

### Development (Docker)

1. Git clone
```
git clone git@github.com:ducmanh2111/construction-company-website.git
```

2. Build and run Docker
```
  docker-compose build
  docker-compose up -d
  # Open new terminal
    docker-compose exec frontend bash
    yarn start
    docker-compose exec backend bash
    bundle exec rails s -b 0.0.0.0
```
