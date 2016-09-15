import React from 'react'
import IngredientIndexItemContainer from './ingredient_index_item_container'

class IngredientIndex extends React.Component {
  componentWillMount() {
  }

  render () {
    const ingredients = this.props.ingredients || {}
    return (
      <ul className='ingredient-list'>
      {
        Object.keys(ingredients).map(id => {
          return (<IngredientIndexItemContainer key={id} item={ingredients[id]}/>)
        })
      }
      </ul>
    )
  }
}

export default IngredientIndex
