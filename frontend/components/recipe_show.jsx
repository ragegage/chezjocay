import React from 'react'

class RecipeShow extends React.Component {
  // componentWillMount () {
  //   this.props.requestRecipes()
  // }

  render () {
    return (
      <ul>
      {
        Object.keys(recipes).map(id => {
          return (<li>{recipes[id].name}</li>)
        })
      }
      </ul>
    )
  }
}

export default RecipeShow
