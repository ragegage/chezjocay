export const requestRecipes = () => ({
  type: 'REQUEST_SHOPPING_LISTS'
})

export const receiveShoppingLists = (lists) => ({
  type: 'RECEIVE_SHOPPING_LISTS',
  lists
})

export const receiveShoppingList = (list) => ({
  type: 'RECEIVE_SHOPPING_LIST',
  list
})
