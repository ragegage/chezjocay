class RecipesController < ApplicationController

  def index
      @recipes = Recipe.all.includes(:ingredients)
      # render json: @recipes
  end

  def show
    @recipe = Recipe.find(params[:id]).includes(:ingredients)
    # render json: @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      # render json: @recipe
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      # render json: @recipe
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    render json: @recipe
  end

  private
    def recipe_params
      params.require(:recipe).permit(:name, :url, :entree, :soup, :salad, :dessert, :appetizer, :tags, :notes)
    end

end
