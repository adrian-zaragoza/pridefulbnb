Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json} do
    
    resources :users, only: [:create] do
      resources :bookings, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :places, only: [:index, :show] do 
      resources :bookings, only: [:create]
    end

    resources :places, only: [:new, :create, :edit, :update, :destroy]

    resources :bookings, only: [:destroy]

    resources :reviews, only: [:destroy, :show, :create, :index]

  end
end
