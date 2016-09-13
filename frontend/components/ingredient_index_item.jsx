import React from 'react'

class IngredientIndexItem extends React.Component {
  componentWillMount() {
  }

  render () {
    return (
      <li>
      {
        this.props.item.name
      }
      </li>
    )
  }
}

export default IngredientIndexItem
