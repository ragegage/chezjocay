import { fetchRecipes,
         fetchRecipe,
         createRecipe,
         searchRecipes,
         createIngredient,
         deleteIngredient
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
    case 'REQUEST_RECIPE':
      fetchRecipe(action.id, recipeSuccess)
      break
    case 'CREATE_RECIPE':
      createRecipe(action.recipe, recipeSuccess)
      break
    case 'SEARCH_RECIPES':
      searchRecipes(action.query, recipesSuccess)
      break
    case 'CREATE_INGREDIENT':
      createIngredient(action.ingredient, recipeSuccess)
      break
    case 'DELETE_INGREDIENT':
      deleteIngredient(action.ingredient, recipeSuccess)
      break
    default:
      break
  }
  return result
};
