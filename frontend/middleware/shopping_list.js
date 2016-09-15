import { fetchShoppingLists,
         createShoppingList,
         updateShoppingListItem,
         createShoppingListItem
       } from '../util/list_api_util';
import { receiveShoppingList,
         receiveShoppingLists
       } from '../actions/shopping_list';

export default ({getState, dispatch}) => next => action => {
  const shoppingListsSuccess = data => dispatch(receiveShoppingLists(data))
  const shoppingListSuccess = data => dispatch(receiveShoppingList(data))
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
    default:
      break
  }
  return result
};
