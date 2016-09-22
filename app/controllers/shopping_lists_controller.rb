class ShoppingListsController < ApplicationController
  def index
    @shopping_lists = ShoppingList.all
    # render json: @shopping_lists
  end

  def show
    @shopping_list = ShoppingList.find(params[:id])
    # render json: @shopping_list
  end

  def create
    @shopping_list = ShoppingList.new(name: "new list")
    if @shopping_list.save
      # render json: @shopping_list
      render :show
    else
      render json: @shopping_list.errors.full_messages, status: 422
    end
  end

  def update
    @shopping_list = ShoppingList.find(params[:id])
    if @shopping_list.update(shopping_list_params)
      # render json: @shopping_list
      render :show
    else
      render json: @shopping_list.errors.full_messages, status: 422
    end
  end

  def destroy
    @shopping_list = ShoppingList.find(params[:id])
    if @shopping_list.destroy
      render json: @shopping_list
    else
      render json: @shopping_list.errors.full_messages, status: 422
    end
  end

  private
  def shopping_list_params
    params.require(:shopping_list).permit(:name)
  end
end
