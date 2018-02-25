Rails.application.routes.draw do
  root 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :auctions, only: [:index, :create, :update]
    resources :bids, only: [:create]
  end

  mount ActionCable.server, at: '/cable'
  # mount ActionCable.server => '/cable'
end