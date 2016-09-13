export const requestRecipes = () => ({
  type: 'REQUEST_RECIPES'
})

export const receiveRecipes = (recipes) => ({
  type: 'RECEIVE_RECIPES',
  recipes
})

export const receiveRecipe = (recipe) => ({
  type: 'RECEIVE_RECIPE',
  recipe
})

export const searchRecipes = (query) => ({
  type: 'SEARCH_RECIPES',
  query
})