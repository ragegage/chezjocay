import React from 'react'
import { browserHistory } from 'react-router'

class RecipeIndexItem extends React.Component {
  componentWillMount() {
  }

  changePage(e) {
    console.log(`going to page ${this.props.item.id}`)
    this.props.push(`/r/${this.props.item.id}`)
  }

  render () {
    return (
      <li onClick={this.changePage.bind(this)}>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default RecipeIndexItem
