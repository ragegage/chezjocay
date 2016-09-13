import { connect } from 'react-redux'
import List from './list'
import { requestShoppingLists } from '../actions/shopping_list'

const mapStateToProps = state => ({
  shopping_lists: state.shopping_lists
})

const mapDispatchToProps = dispatch => ({
  requestShoppingLists: () => dispatch(requestShoppingLists())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
