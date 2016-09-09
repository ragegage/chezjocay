import { connect } from 'react-redux'
import Index from './index'

const mapStateToProps = state => ({
  recipes: state.recipes
})

const mapDispatchToProps = dispatch => ({
  requestRecipes: () => dispatch(requestRecipes())
})

export default connect(
  mapStateToProps
)(Index)
