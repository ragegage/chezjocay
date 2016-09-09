export const fetchRecipes = (success) => {
  $.ajax({
    url: 'recipes',
    method: 'GET',
    success,
    error: data => console.log(data)
  })
}

export const createRecipe = (data, success) => {
  $.ajax({
    url: 'recipes',
    method: 'POST',
    data,
    success,
    error: data => console.log(data)
  })
}
