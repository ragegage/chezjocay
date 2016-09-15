import React from 'react'

class ListItem extends React.Component {
  componentWillMount() {
  }

  toggle(e) {
    e.preventDefault()
    this.props.toggleItem(this.props.item)
  }

  render () {
    const item = this.props.item
    return (
      <li key={item.id}
          onClick={this.toggle.bind(this)}
          className={item.done ? 'shopping-list-item greyed-out' : 'shopping-list-item'}>
      {
        item.name
      }
      </li>
    )
  }
}

export default ListItem
