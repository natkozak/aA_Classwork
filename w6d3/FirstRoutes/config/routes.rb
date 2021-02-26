Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  #-- the easy way
  resources :users, only: [:create, :destroy, :index, :show, :update] do 
    resources :artworks, only: [:create, :destroy, :show, :index, :update]
    
  end
  resources :artwork_shares, only: [:create, :destroy]
  resources :comments, only: [:index, :create, :destroy]
  

  #localhost:3000/artworks/6/comments
  

  #-- the hard way: all default RESTful routes
  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
  # get '/users/new', to: 'users#new', as: 'new_user'

  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  # get '/users/:id', to: 'users#show', as: 'user'
  # patch '/users/:id', to: 'users#update'
  # put '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'


end

