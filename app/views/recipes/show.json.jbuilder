json.set! @recipe.id do
  json.partial! 'recipe', recipe: @recipe
end