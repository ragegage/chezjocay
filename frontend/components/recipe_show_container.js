import { connect } from 'react-redux'
import RecipeShow from './recipe_show'

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.params.recipeId]
})

export default connect(
  mapStateToProps
)(RecipeShow)
