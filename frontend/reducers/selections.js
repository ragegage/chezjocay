const selections = function(state = {}, action){
  switch(action.type){
    case 'SELECT_LIST':
      return {...state, list: action.id};
    default:
      return state;
  }
};

export default selections;
