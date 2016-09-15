import { fetchRecipes,
         createRecipe,
         searchRecipes,
         createIngredient
       } from '../util/recipe_api_util'
import { receiveRecipe,
         receiveRecipes
       } from '../actions/recipe'

export default ({getState, dispatch}) => next => action => {
  const recipesSuccess = data => dispatch(receiveRecipes(data))
  const recipeSuccess = data => dispatch(receiveRecipe(data))
  const result = next(action)

  switch(action.type){
    case 'REQUEST_RECIPES':
      fetchRecipes(recipesSuccess)
      break
    case 'CREATE_RECIPE':
      createRecipe(action.bench, recipeSuccess)
      break
    case 'SEARCH_RECIPES':
      searchRecipes(action.query, recipesSuccess)
      break
    case 'CREATE_INGREDIENT':
      createIngredient(action.ingredient, recipeSuccess)
      break
    default:
      break
  }
  return result
};
