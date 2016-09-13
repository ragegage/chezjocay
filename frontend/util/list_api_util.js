export const fetchShoppingLists = (success) => {
  $.ajax({
    url: 'shopping_lists',
    method: 'GET',
    success,
    error: data => console.log(data)
  })
}

export const createShoppingList = (data, success) => {
  $.ajax({
    url: 'shopping_lists',
    method: 'POST',
    data,
    success,
    error: data => console.log(data)
  })
}

export const updateShoppingListItem = (item, success) => {
  $.ajax({
    url: 'shopping_lists',
    method: 'POST',
    data: {},
    success,
    error: data => console.log(data)
  })
}
