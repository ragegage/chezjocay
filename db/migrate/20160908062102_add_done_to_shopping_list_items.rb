class AddDoneToShoppingListItems < ActiveRecord::Migration
  def change
    add_column :shopping_list_items, :done, :boolean, default: false
  end
end
