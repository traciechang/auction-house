Rails.application.routes.draw do
  root 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :auctions, only: [:index, :show, :create, :update]
    resources :bids, only: [:create, :show, :index]
    resources :inventory_items, only: [:update]
    resources :inventories, only: [:update]
  end

  mount ActionCable.server, at: '/cable'
  # mount ActionCable.server => '/cable'
end