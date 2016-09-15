import { connect } from 'react-redux'
import RecipeShow from './recipe_show'
import { createIngredient } from '../actions/recipe'

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.params.recipeId]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createIngredient: ingredient => dispatch(createIngredient({...ingredient, recipe_id: ownProps.params.recipeId}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow)
