import { connect } from 'react-redux'
import RecipeShow from './recipe_show'

const mapStateToProps = state => ({
  recipes: state.recipes
})

const mapDispatchToProps = dispatch => ({
  requestRecipes: () => dispatch(requestRecipes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow)
