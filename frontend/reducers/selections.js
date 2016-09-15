const selections = function(state = {}, action){
  switch(action.type){
    case 'SELECT_LIST':
      return {...state, list: action.id};
    case 'DESELECT_LIST':
      return {...state, list: undefined};
    default:
      return state;
  }
};

export default selections;
