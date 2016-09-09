Rails.application.routes.draw do
  # get 'welcome/index'


   root 'welcome#index'


  #search with(OUT) elasticsearch
  get 'search', to: 'search#search', defaults: {format: :json}

  resources :recipes, only: [:index, :show, :create, :destroy], defaults: {format: :json}
  resources :shopping_lists, only: [:index, :show, :create, :destroy], defaults: {format: :json}
end
