import { connect } from 'react-redux'
import RecipeForm from './recipe_form'
import { createRecipe } from '../actions/recipe'
import { push } from 'react-router-redux'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe({recipe: recipe})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm)
