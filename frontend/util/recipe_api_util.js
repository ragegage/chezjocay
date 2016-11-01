export const fetchRecipes = (success) => {
  $.ajax({
    url: `/recipes`,
    method: 'GET',
    success,
    error: data => console.log(data)
  })
}

export const createRecipe = (data, success) => {
  $.ajax({
    url: `/recipes`,
    method: 'POST',
    data,
    success,
    error: data => console.log(data)
  })
}

export const searchRecipes = (query, success) => {
  $.ajax({
    url: '/search',
    method: 'GET',
    data: {q: query},
    success,
    error: data => console.log(data)
  })
}

export const createIngredient = (ingredient, success) => {
  $.ajax({
    url: '/ingredients',
    method: 'POST',
    data: {ingredient},
    success,
    error: data => console.log(data)
  })
}

export const deleteIngredient = (ingredient, success) => {
  $.ajax({
    url: `/ingredients/${ingredient.id}`,
    method: 'DELETE',
    success,
    error: data => console.log(data)
  })
}

export const fetchRecipe = (id, success) => {
  $.ajax({
    url: `/recipes/${id}`,
    method: 'GET',
    success,
    error: data => console.log(data)
  })
}