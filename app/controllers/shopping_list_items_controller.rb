class ShoppingListItemsController < ApplicationController
  def create
    @shopping_list_item = ShoppingListItem.new(shopping_list_item_params)
    if @shopping_list_item.save
      @shopping_list = @shopping_list_item.shopping_list
      render 'shopping_lists/show'
    else
      render json: @shopping_list_item.errors.full_messages, status: 422
    end
  end

  def update
    @shopping_list_item = ShoppingListItem.find(params[:id])
    if @shopping_list_item.update(shopping_list_item_params)
      @shopping_list = @shopping_list_item.shopping_list
      render 'shopping_lists/show'
    else
      render json: @shopping_list.errors.full_messages, status: 422
    end
  end

  def destroy
    @shopping_list_item = ShoppingListItem.find(params[:id])
    if @shopping_list_item.destroy
      @shopping_list = @shopping_list_item.shopping_list
      render 'shopping_lists/show'
    else
      render json: @shopping_list_item.errors.full_messages, status: 422
    end
  end

  def create_from_recipe
    @recipe = Recipe.find(params[:recipe_id])
    bulk_shopping_list_item_params = @recipe.ingredients.map do |ingredient|
      {name: ingredient.name, shopping_list_id: params[:shopping_list_id], recipe_id: params[:recipe_id]}
    end
    if ShoppingListItem.create(bulk_shopping_list_item_params)
      @shopping_list = ShoppingList.find(params[:shopping_list_id])
      render 'shopping_lists/show'
    else
      render json: @shopping_list_items.errors.full_messages, status: 422
    end
  end

  def shopping_list_item_params
    params.require(:shopping_list_item).permit(:name, :shopping_list_id, :recipe_id, :done)
  end
end
