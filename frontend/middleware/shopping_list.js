import { fetchShoppingLists,
         createShoppingList,
         updateShoppingListItem,
         createShoppingListItem,
         deleteShoppingListItem,
         createShoppingListItems,
         deleteShoppingList,
         updateShoppingList
       } from '../util/list_api_util';
import { receiveShoppingList,
         receiveShoppingLists,
         removeShoppingList
       } from '../actions/shopping_list';

export default ({getState, dispatch}) => next => action => {
  const shoppingListsSuccess = data => dispatch(receiveShoppingLists(data))
  const shoppingListSuccess = data => dispatch(receiveShoppingList(data))
  const shoppingListDeletionSuccess = data => dispatch(removeShoppingList(data))
  const result = next(action)
  switch(action.type){
    case 'REQUEST_SHOPPING_LISTS':
      fetchShoppingLists(shoppingListsSuccess)
      break
    case 'CREATE_SHOPPING_LIST':
      createShoppingList(action.bench, shoppingListSuccess)
      break
    case 'UPDATE_SHOPPING_LIST_ITEM':
      updateShoppingListItem(action.item, shoppingListSuccess)
      break
    case 'CREATE_SHOPPING_LIST_ITEM':
      createShoppingListItem(action.item, shoppingListSuccess)
      break
    case 'DELETE_SHOPPING_LIST_ITEM':
      deleteShoppingListItem(action.item, shoppingListSuccess)
      break
    case 'BULK_CREATE_SHOPPING_LIST_ITEMS':
      createShoppingListItems(action.list_id, action.recipe_id, shoppingListSuccess)
      break
    case 'DELETE_SHOPPING_LIST':
      deleteShoppingList(action.id, shoppingListDeletionSuccess)
      break
    case 'UPDATE_SHOPPING_LIST':
      updateShoppingList(action.list, shoppingListSuccess)
      break
    default:
      break
  }
  return result
};
