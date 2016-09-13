import React from 'react'

class ListItem extends React.Component {
  componentWillMount() {
  }

  greyOut(e) {
    console.log('grayed out')
  }

  render () {
    return (
      <li key={this.props.item.id} onClick={this.greyOut}>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default ListItem
