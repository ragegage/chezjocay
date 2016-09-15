import React from 'react'
import { browserHistory } from 'react-router'

class RecipeIndexItem extends React.Component {
  componentWillMount() {
  }

  changePage(e) {
    this.props.push(`/r/${this.props.item.id}`)
  }

  render () {
    const item = this.props.item
    return (
      <li key={item.id} onClick={this.changePage.bind(this)} className='recipe-list-item'>
        <header>{
          item.name
        }</header>
        <ul>
          {item.entree ? <li>entree</li> : ''}
          {item.soup ? <li>soup</li> : ''}
          {item.salad ? <li>salad</li> : ''}
          {item.dessert ? <li>dessert</li> : ''}
          {item.appetizer ? <li>appetizer</li> : ''}
        </ul>
      </li>
    )
  }
}

export default RecipeIndexItem
