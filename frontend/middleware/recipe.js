import { fetchRecipes,
         createRecipe
       } from '../util/recipe_api_util';
import { receiveRecipe,
         receiveRecipes
       } from '../actions/recipe';

export default ({getState, dispatch}) => next => action => {
  const recipesSuccess = data => dispatch(receiveRecipes(data));
  const recipeSuccess = data => dispatch(receiveRecipe(data));
  const result = next(action);
  switch(action.type){
    case 'REQUEST_RECIPES':
      fetchRecipes(recipesSuccess);
      break;
    case 'CREATE_RECIPE':
      createRecipe(action.bench, recipeSuccess);
      break;
    default:
      break;
  }
  return result;
};
