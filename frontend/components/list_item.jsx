import React from 'react'

class ListItem extends React.Component {
  componentWillMount() {
  }

  greyOut(e) {
    console.log('grayed out')
  }

  render () {
    return (
      <li onClick={this.greyOut}>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default ListItem
