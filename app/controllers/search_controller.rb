class SearchController < ApplicationController
  def search
    if params[:q].nil?
      @recipes = []
    else
      @recipes = Recipe.search params[:q]
    end
  end
end
