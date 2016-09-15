json.set! @recipe.id do
  json.partial! 'recipes/recipe', recipe: @recipe
end