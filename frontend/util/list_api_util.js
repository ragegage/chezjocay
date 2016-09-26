export const fetchShoppingLists = (success) => {
  $.ajax({
    url: '/shopping_lists',
    method: 'GET',
    success,
    error: data => console.log(data)
  })
}

export const createShoppingList = (data, success) => {
  $.ajax({
    url: '/shopping_lists',
    method: 'POST',
    data,
    success,
    error: data => console.log(data)
  })
}

export const updateShoppingListItem = (item, success) => {
  $.ajax({
    url: `/shopping_list_items/${item.id}`,
    method: 'PATCH',
    data: {shopping_list_item: {...item, done: !item.done}},
    success,
    error: data => console.log(data)
  })
}

export const createShoppingListItem = (item, success) => {
  $.ajax({
    url: `/shopping_list_items`,
    method: 'POST',
    data: {shopping_list_item: item},
    success,
    error: data => console.log(data)
  })
}

export const deleteShoppingListItem = (item, success) => {
  $.ajax({
    url: `/shopping_list_items/${item.id}`,
    method: 'DELETE',
    success,
    error: data => console.log(data)
  })
}

export const createShoppingListItems = (shopping_list_id, recipe_id, success) => {
  $.ajax({
    url: `/shopping_list_items/bulk`,
    method: 'POST',
    data: {shopping_list_id, recipe_id},
    success,
    error: data => console.log(data)
  })
}

export const deleteShoppingList = (id, success) => {
  $.ajax({
    url: `/shopping_lists/${id}`,
    method: 'DELETE',
    success,
    error: data => console.log(data)
  })
}