import { connect } from 'react-redux'
import IngredientIndexItem from './ingredient_index_item'
import { createShoppingListItem } from '../actions/shopping_list'
import { deleteIngredient } from '../actions/recipe'

const mapStateToProps = (state) => ({
  selectedListId: state.selections.list
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createListItem: (item) => dispatch(createShoppingListItem(item)),
  deleteIngredient: (item) => dispatch(deleteIngredient(item)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientIndexItem)
