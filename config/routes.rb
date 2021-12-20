Rails.application.routes.draw do
  resources :comments
  resources :posts 
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/quotes", to: "quotes#index"
  
  get "/me", to: "users#show"
  
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"


end
