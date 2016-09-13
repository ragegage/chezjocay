import React from 'react'

class RecipeSearch extends React.Component {
  componentWillMount() {
  }

  onChange(e) {
    console.log(`searching with ${e.currentTarget.value}`)
    this.props.searchRecipes(e.currentTarget.value)
  }

  render () {
    return (
      <input onChange={this.onChange.bind(this)} />
    )
  }
}

export default RecipeSearch
