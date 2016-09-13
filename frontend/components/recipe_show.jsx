import React from 'react'
import IngredientIndex from './ingredient_index'

class RecipeShow extends React.Component {
  // componentWillMount () {
  //   this.props.requestRecipes()
  // }

  render () {
    const ingredients = this.props.recipe.ingredients
    return (
      <div>
      {
        this.props.recipe.name
      }
      {
        <IngredientIndex ingredients={ingredients} />
      }
      </div>
    )
  }
}

export default RecipeShow
