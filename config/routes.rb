# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
    resources :styles do
        resources :payams
    end

    resources :lines, :except => [:update, :edit] 

    resources :payams do
        resources :lines
    end

    devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

    resources :players do
        resources :payams
        resources :lines
    end

    #welcome pages
    root 'welcome#index'
    get 'welcome/about'


    # keep user id out of the visible url
    get 'player' => 'players#show'

    # send decompose data to controller
    post 'payams/decompose' => 'payams#decompose'

    get 'players/:id/outstanding_originals' => 'players#outstanding_originals'

end 
