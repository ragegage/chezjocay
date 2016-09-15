import React from 'react'

class ListList extends React.Component {
  componentWillMount() {
  }

  render () {
    return (
      <li key={this.props.item.id} 
          onClick={this.props.onClick}
          className='shopping-list-list'>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default ListList
