class SearchController < ApplicationController
  def search
    if params[:q].nil?
      @recipes = []
    else
      @recipes = Recipe.search(params[:q]).includes(:ingredients)
    end
    render 'recipes/index'
  end
end
