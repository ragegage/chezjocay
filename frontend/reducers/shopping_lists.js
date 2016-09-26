const shopping_lists = function(state = {}, action){
  switch(action.type){
    case 'RECEIVE_SHOPPING_LISTS':
      return action.lists;
    case 'RECEIVE_SHOPPING_LIST':
      return {...state, ...action.list}
    case 'REMOVE_SHOPPING_LIST':
      let newState = {...state}
      delete newState[action.list.id]
      return newState
    default:
      return state;
  }
};

export default shopping_lists;
