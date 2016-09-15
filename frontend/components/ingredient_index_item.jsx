import React from 'react'

class IngredientIndexItem extends React.Component {
  componentWillMount() {
  }

  ingredientClick (e) {
    if (this.props.selectedListId)
      this.props.createListItem({...this.props.item, shopping_list_id: this.props.selectedListId})
  }

  handleDelete (e) {
    e.stopPropagation()
    this.props.deleteIngredient(this.props.item)
  }

  render () {
    return (
      <li key={this.props.item.id} onClick={this.ingredientClick.bind(this)}>
        {
          this.props.item.name
        }
        <button onClick={this.handleDelete.bind(this)}>-</button>
      </li>
    )
  }
}

export default IngredientIndexItem
