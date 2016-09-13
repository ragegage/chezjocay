import React from 'react'
import IngredientIndexItem from './ingredient_index_item'

class IngredientIndex extends React.Component {
  componentWillMount() {
  }

  render () {
    const ingredients = this.props.ingredients || {}
    return (
      <ul>
      {
        Object.keys(ingredients).map(id => {
          return (<IngredientIndexItem key={id} item={ingredients[id]}/>)
        })
      }
      </ul>
    )
  }
}

export default IngredientIndex
