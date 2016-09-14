import React from 'react'
import IngredientIndex from './ingredient_index'

class RecipeShow extends React.Component {
  // componentWillMount () {
  //   this.props.requestRecipes()
  // }

  render () {
    const ingredients = this.props.recipe.ingredients
    const recipe = this.props.recipe
    return (
      <div className='recipe-show'>
        <header>{
          recipe.name
        }</header>
        <a href={recipe.url}>{recipe.url}</a>
        <p>{recipe.notes}</p>
        <ul>
          {recipe.entree ? <li>entree</li> : ''}
          {recipe.soup ? <li>soup</li> : ''}
          {recipe.salad ? <li>salad</li> : ''}
          {recipe.dessert ? <li>dessert</li> : ''}
          {recipe.appetizer ? <li>appetizer</li> : ''}
        </ul>
        <footer>{recipe.tags}</footer>
      {
        <IngredientIndex ingredients={ingredients} />
      }
      </div>
    )
  }
}

export default RecipeShow
