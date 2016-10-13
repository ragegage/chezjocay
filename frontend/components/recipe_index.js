import React from 'react'
import RecipeSearchContainer from './recipe_search_container'
import RecipeFormContainer from './recipe_form_container'
import RecipeIndexItem from './recipe_index_item'

class RecipeIndex extends React.Component {
  componentWillMount () {
    this.props.requestRecipes()
  }

  render () {
    return (
      <div className='recipe-index'>
        <div>
          <RecipeSearchContainer />
          <RecipeFormContainer />
        </div>
        <ul className='recipe-list'>
        {
          Object.keys(this.props.recipes).sort((a, b) => {
            var nameA = this.props.recipes[a].name.toUpperCase();
            var nameB = this.props.recipes[b].name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          }).map(id => {
            return (<RecipeIndexItem key={id} item={this.props.recipes[id]} push={this.props.push} />)
          })
        }
        </ul>
      </div>
    )
  }
}

export default RecipeIndex
