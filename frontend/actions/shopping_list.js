export const requestShoppingLists = () => ({
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

export const updateShoppingListItem = (item) => ({
  type: 'UPDATE_SHOPPING_LIST_ITEM',
  item
})

export const createShoppingListItem = (item) => ({
  type: 'CREATE_SHOPPING_LIST_ITEM',
  item
})

export const deleteShoppingListItem = (item) => ({
  type: 'DELETE_SHOPPING_LIST_ITEM',
  item
})

