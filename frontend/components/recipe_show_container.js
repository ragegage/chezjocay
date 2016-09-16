import { connect } from 'react-redux'
import RecipeShow from './recipe_show'
import { createIngredient } from '../actions/recipe'
import { bulkCreateShoppingListItems } from '../actions/shopping_list'

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.params.recipeId],
  listId: state.selections.list,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createIngredient: ingredient => dispatch(createIngredient({...ingredient, recipe_id: ownProps.params.recipeId})),
  bulkCreateItems: (list_id) => dispatch(bulkCreateShoppingListItems(list_id, ownProps.params.recipeId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow)
