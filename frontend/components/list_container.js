import { connect } from 'react-redux'
import List from './list'
import { requestShoppingLists, updateShoppingListItem } from '../actions/shopping_list'
import { selectList } from '../actions/selections'

const mapStateToProps = state => ({
  shopping_lists: state.shopping_lists,
  shopping_list: state.shopping_lists[state.selections.list]
})

const mapDispatchToProps = dispatch => ({
  requestShoppingLists: () => dispatch(requestShoppingLists()),
  selectList: (id) => dispatch(selectList(id)),
  toggleItem: (item) => dispatch(updateShoppingListItem(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
