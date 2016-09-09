const shopping_lists = function(state = {}, action){
  switch(action.type){
    case 'RECEIVE_SHOPPING_LISTS':
      return action.lists;
    case 'RECEIVE_SHOPPING_LIST':
      const newList = {[action.list.id]: action.list};
      return {...state, ...newList}
    default:
      return state;
  }
};

export default shopping_lists;
