import React from 'react'

class IngredientIndexItem extends React.Component {
  componentWillMount() {
  }

  render () {
    return (
      <li key={this.props.item.id}>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default IngredientIndexItem