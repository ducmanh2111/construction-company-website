Rails.application.routes.draw do
  devise_for :admins, skip: [:sessions]
  as :admin do
    post "login", to: "api/v1/sessions#create"
    delete "logout", to: "api/v1/sessions#destroy"
  end
end
