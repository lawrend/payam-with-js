Rails.application.routes.draw do

    devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

    # resources :lines, :except => [:update, :edit]
    
    resources :payams do
        member do
            post 'decompose'
        end 
    end 
    
    resources :players do
        resources :payams 
        resources :lines
    end 
 
    resources :styles do 
        resources :payams 
    end 

    root 'welcome#index'
    get 'welcome/about'

    # keep user id out of the visible url
    get 'player' => 'players#show'

end
