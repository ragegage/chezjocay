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
    const item = this.props.item
    return (
      <li key={item.id} onClick={this.changePage.bind(this)}>
        <header>{
          item.name
        }</header>
        <a href={item.url}>{item.url}</a>
        <p>{item.notes}</p>
        <ul>
          {item.entree ? <li>entree</li> : ''}
          {item.soup ? <li>soup</li> : ''}
          {item.salad ? <li>salad</li> : ''}
          {item.dessert ? <li>dessert</li> : ''}
          {item.appetizer ? <li>appetizer</li> : ''}
        </ul>
        <footer>{item.tags}</footer>
      </li>
    )
  }
}

export default RecipeIndexItem
