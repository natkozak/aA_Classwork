Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
    resources :subs, only: [ :edit, :update, :new]
  end

  resource :session, only: [:new, :create, :destroy]

  resources :subs, only: [:create, :show, :index] do 
    resources :posts, only: [:show, :edit, :update, :create, :new]
  end

end
