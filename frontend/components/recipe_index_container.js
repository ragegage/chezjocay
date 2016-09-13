import { connect } from 'react-redux'
import RecipeIndex from './recipe_index'
import { requestRecipes } from '../actions/recipe'

const mapStateToProps = state => ({
  recipes: state.recipes
})

const mapDispatchToProps = dispatch => ({
  requestRecipes: () => dispatch(requestRecipes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)
