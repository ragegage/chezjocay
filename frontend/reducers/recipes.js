const recipes = function(state = {}, action){
  switch(action.type){
    case 'RECEIVE_ALL_RECIPES':
      return action.recipes;
    case 'RECEIVE_NEW_RECIPE':
      const newRecipe = {[action.recipe.id]: action.recipe};
      return {...state, ...newRecipe}
    default:
      return state;
  }
};

export default recipes;