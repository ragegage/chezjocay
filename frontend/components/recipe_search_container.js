import { connect } from 'react-redux'
import RecipeSearch from './recipe_search'
import { searchRecipes } from '../actions/recipe'
import { push } from 'react-router-redux'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  searchRecipes: (query) => dispatch(searchRecipes(query)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearch)
