json.extract! recipe, :id, :name, :url, :entree, :soup, :salad, :dessert, :appetizer, :tags, :notes

json.ingredients do
  recipe.ingredients.each do |ingredient|
    json.set! ingredient.id do
      json.extract! ingredient, :name, :id, :recipe_id
    end
  end
end
