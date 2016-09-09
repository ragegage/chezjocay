export const requestRecipes = () => ({
  type: 'REQUEST_RECIPES'
})

export const receiveShoppingLists = (lsits) => ({
  type: 'RECEIVE_RECIPES'
  lsits
})

export const receiveShoppingList = (list) => ({
  type: 'RECEIVE_RECIPE'
  list
})
