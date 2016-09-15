import React from 'react'

class RecipeSearch extends React.Component {
  componentWillMount() {
  }

  onChange(e) {
    this.props.searchRecipes(e.currentTarget.value)
  }

  render () {
    return (
      <input onChange={this.onChange.bind(this)}
             className='search'
             placeholder='Search...' />
    )
  }
}

export default RecipeSearch
