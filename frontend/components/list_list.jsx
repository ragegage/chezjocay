import React from 'react'

class ListList extends React.Component {
  componentWillMount() {
  }

  destroyList(e) {
    e.stopPropagation()
    this.props.deleteList()
  }

  render () {
    return (
      <li key={this.props.item.id} 
          onClick={this.props.onClick}
          className='shopping-list-list'>
        {
          this.props.item.name
        }
        <button onClick={this.destroyList.bind(this)}>-</button>
      </li>
    )
  }
}

export default ListList
