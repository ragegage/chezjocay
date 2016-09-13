import React from 'react'

class ListList extends React.Component {
  componentWillMount() {
  }

  render () {
    return (
      <li key={this.props.item.id} onClick={this.props.onClick}>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default ListList
