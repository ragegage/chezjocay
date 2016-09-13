import React from 'react'
import RecipeSearch from './recipe_search'
import RecipeIndexItem from './recipe_index_item'

class RecipeIndex extends React.Component {
  componentWillMount () {
    this.props.requestRecipes()
  }

  render () {
    return (
      <div className='recipe-index'>
        <RecipeSearch />
        <ul className='recipe-list'>
        {
          Object.keys(this.props.recipes).map(id => {
            return (<RecipeIndexItem item={this.props.recipes[id]} />)
          })
        }
        </ul>
      </div>
    )
  }
}

export default RecipeIndex
