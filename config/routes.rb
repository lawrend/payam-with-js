Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources lines, :except => [:update, :edit]
  resources :payams do 
      member do 
          post 'decompose'
      end 
  end 
 resources :players do 
     resources :payams 
     resources :lines
 end 
  root 'welcome#index'
  get 'welcome/about'


  # keep user id out of the visible url
  get 'player' => 'players#show'

end
