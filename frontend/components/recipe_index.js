import React from 'react'
import RecipeSearchContainer from './recipe_search_container'
import RecipeIndexItem from './recipe_index_item'

class RecipeIndex extends React.Component {
  componentWillMount () {
    this.props.requestRecipes()
  }

  render () {
    return (
      <div className='recipe-index'>
        <RecipeSearchContainer />
        <ul className='recipe-list'>
        {
          Object.keys(this.props.recipes).map(id => {
            return (<RecipeIndexItem key={id} item={this.props.recipes[id]} push={this.props.push} />)
          })
        }
        </ul>
      </div>
    )
  }
}

export default RecipeIndex
