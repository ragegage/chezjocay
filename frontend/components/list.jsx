import React from 'react'

class List extends React.Component {
  componentWillMount() {
    this.props.requestShoppingLists();
  }

  render () {
    return (
      <ul>
      {
        Object.keys(this.props.shopping_lists).map(id => {
          return (<li>{this.props.shopping_lists[id].name}</li>)
        })
      }
      </ul>
    )
  }
}

export default List
