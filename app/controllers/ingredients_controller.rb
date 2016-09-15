class IngredientsController < ApplicationController
  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      @recipe = @ingredient.recipe
      render 'recipes/show'
    else
      render json: @ingredient.errors.full_messages, status: 422
    end
  end

  def update
    @ingredient = Ingredient.find(params[:id])

    if @ingredient.update(ingredient_params)
      @recipe = @ingredient.recipe
      render 'recipes/show'
    else
      render json: @ingredient.errors.full_messages, status: 422
    end
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy

    @recipe = @ingredient.recipe
    render 'recipes/show'
  end

  private
    def ingredient_params
      params.require(:ingredient).permit(:name, :recipe_id)
    end
end
