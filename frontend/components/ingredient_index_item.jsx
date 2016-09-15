import React from 'react'

class IngredientIndexItem extends React.Component {
  componentWillMount() {
  }

  ingredientClick (e) {
    if (this.props.selectedListId)
      this.props.createListItem({...this.props.item, shopping_list_id: this.props.selectedListId})
  }

  render () {
    return (
      <li key={this.props.item.id} onClick={this.ingredientClick.bind(this)}>
        {
          this.props.item.name
        }
      </li>
    )
  }
}

export default IngredientIndexItem
