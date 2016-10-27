class AddRecipeIdToShoppingListItems < ActiveRecord::Migration
  def change
    add_column :shopping_list_items, :recipe_id, :integer
  end
end
