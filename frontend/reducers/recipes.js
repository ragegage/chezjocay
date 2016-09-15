const recipes = function(state = {}, action){
  switch(action.type){
    case 'RECEIVE_RECIPES':
      return action.recipes;
    case 'RECEIVE_RECIPE':
      return {...state, ...action.recipe}
    default:
      return state;
  }
};

export default recipes;
