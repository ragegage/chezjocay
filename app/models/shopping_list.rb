class ShoppingList < ActiveRecord::Base
  has_many :shopping_list_items

  def add_recipe(recipe)
    recipe.ingredients.each do |ingredient|
      self.shopping_list_items.create(name: ingredient.name)
    end
  end
end
