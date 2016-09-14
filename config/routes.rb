Rails.application.routes.draw do
  #search with(OUT) elasticsearch
  get 'search', to: 'search#search', defaults: {format: :json}

  resources :recipes, only: [:index, :show, :create, :update, :destroy], defaults: {format: :json}
  resources :shopping_lists, only: [:index, :show, :create, :update, :destroy], defaults: {format: :json}
  resources :shopping_list_items, only: [:create, :update, :destroy], defaults: {format: :json}

  root 'welcome#index'
end
