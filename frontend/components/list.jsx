import React from 'react'
import ListItem from './list_item'

class List extends React.Component {
  componentWillMount() {
    this.props.requestShoppingLists();
  }

  render () {
    return (
      <ul>
      {
        Object.keys(this.props.shopping_lists).map(id => {
          return (<ListItem item={this.props.shopping_lists[id]}/>)
        })
      }
      </ul>
    )
  }
}

export default List
