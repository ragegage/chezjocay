class CreateShoppingListItems < ActiveRecord::Migration
  def change
    create_table :shopping_list_items do |t|
      t.string :name
      t.integer :shopping_list_id

      t.timestamps null: false
    end
  end
end
