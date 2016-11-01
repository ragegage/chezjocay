import React from 'react'
import IngredientIndex from './ingredient_index'
import IngredientForm from './ingredient_form'

class RecipeShow extends React.Component {
  componentWillMount () {
    if (!this.props.recipe) 
      this.props.requestRecipe()
  }

  render () {
    const recipe = this.props.recipe || {}
    const ingredients = recipe.ingredients
    return (
      <div className='recipe-show'>
        <header>
          <a href={recipe.url} target='_blank'>{
            recipe.name
          }</a>
          <ul>
            {recipe.entree ? <li>entree</li> : ''}
            {recipe.soup ? <li>soup</li> : ''}
            {recipe.salad ? <li>salad</li> : ''}
            {recipe.dessert ? <li>dessert</li> : ''}
            {recipe.appetizer ? <li>appetizer</li> : ''}
          </ul>
        </header>
        <section className='info'>
          <section className='left-half'>
            <tags>{recipe.tags}</tags>
            <p>{recipe.notes}</p>
          </section>

          <section className='right-half'>
            <header onClick={this.props.bulkCreateItems.bind(null, this.props.listId)}>Add All Ingredients</header>
            <IngredientIndex ingredients={ingredients} />
            <IngredientForm createIngredient={this.props.createIngredient}/>
          </section>
        </section>
      </div>
    )
  }
}

export default RecipeShow
