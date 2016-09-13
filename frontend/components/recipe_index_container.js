import { connect } from 'react-redux'
import RecipeIndex from './recipe_index'
import { requestRecipes } from '../actions/recipe'
import { push } from 'react-router-redux'

const mapStateToProps = state => ({
  recipes: state.recipes
})

const mapDispatchToProps = dispatch => ({
  requestRecipes: () => dispatch(requestRecipes()),
  push: (location) => dispatch(push(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)
