import { fetchShoppingLists,
         createShoppingList
       } from '../util/list_api_util';
import { receiveShoppingList,
         receiveShoppingLists
       } from '../actions/shopping_list';

export default ({getState, dispatch}) => next => action => {
  const shoppingListsSuccess = data => dispatch(receiveShoppingLists(data));
  const shoppingListSuccess = data => dispatch(receiveShoppingList(data));
  const result = next(action);
  switch(action.type){
    case 'REQUEST_SHOPPING_LISTS':
      fetchShoppingLists(shoppingListsSuccess);
      break;
    case 'CREATE_SHOPPING_LIST':
      createShoppingList(action.bench, shoppingListSuccess);
      break;
    default:
      break;
  }
  return result;
};