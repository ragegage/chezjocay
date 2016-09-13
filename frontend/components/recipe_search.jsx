import React from 'react'

class RecipeSearch extends React.Component {
  componentWillMount() {
  }

  onChange(e) {
    console.log(`new value is ${e.currentTarget.value}`)
  }

  render () {
    return (
      <input onChange={this.onChange} />
    )
  }
}

export default RecipeSearch
