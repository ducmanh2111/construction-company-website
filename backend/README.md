# README

## Ruby version
2.6.6
## Branch to deploy
dev-api
## Configuration
### Config NGINX
```
vi /etc/nginx/conf.d/ccw-dev-api.conf
```
```
upstream dev-ccw-api {
  server unix:///var/www/dev-ccw-api/shared/tmp/sockets/dev-ccw-puma.sock;
}

server {
  server_name quanlitoanha.tk

  root /var/www/dev-ccw-api/current/public;
  access_log /var/www/dev-ccw-api/shared/log/nginx.access.log;
  error_log /var/www/dev-ccw-api/shared/log/nginx.error.log;

# auth_basic "Private Property";
# auth_basic_user_file /etc/nginx/.htpasswd;
  try_files $uri/index.html $uri @dev-ccw-api;

  location @dev-ccw-api {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;

    proxy_pass http://dev-ccw-api;

    proxy_read_timeout 120s;
  }

  error_page 500 502 503 504 /500.html;
  client_header_buffer_size 64k;
  large_client_header_buffers 4 64k;
  client_max_body_size 1G;
  keepalive_timeout 10;
}
```
### Config Capistrano
In local docker environment, run this command:
```
bundle exec cap install
```
This command will generate Capfile, /deploy directory and etc
### Working with git
1. Checkout to develop branch
```
git checkout develop
```
2. Split sub-folder /backend to another git branch by this command:
```
git subtree split --branch dev-api --prefix backend/
```
3. Push 'dev-api' branch to remote repository
```
git push origin dev-api -f 
```
If dev-api branch is already created, please remove them by:
```
git branch -D
```
### Deploy command
```
bundle exec cap develop deploy
```
