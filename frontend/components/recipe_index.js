import React from 'react'

class RecipeIndex extends React.Component {
  componentWillMount () {
    this.props.requestRecipes()
  }

  render () {
    return (
      <ul>
      {
        Object.keys(this.props.recipes).map(id => {
          return (<li>{this.props.recipes[id].name}</li>)
        })
      }
      </ul>
    )
  }
}

export default RecipeIndex
