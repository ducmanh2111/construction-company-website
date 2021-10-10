Rails.application.routes.draw do
  devise_for :admins, skip: [:sessions]
  as :admin do
    post "login", to: "api/v1/sessions#create"
    delete "logout", to: "api/v1/sessions#destroy"
  end

  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :house_categories, only: [:create, :show, :update, :destroy]
      resources :houses, only: [:create, :show, :update, :destroy]
      resources :room_categories, only: [:create, :show, :update, :destroy]
      resources :rooms, only: [:create, :show, :update, :destroy]

      namespace :user do
        resources :house_categories, only: [:index, :show]
        resources :houses, only: [:index, :show]
        resources :room_categories, only: [:index, :show]
      end
    end
  end
end
