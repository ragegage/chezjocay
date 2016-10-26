import React from 'react'
import ListItem from './list_item'
import ListList from './list_list'
import ListHeader from './list_header'
import ListItemForm from './list_item_form'

class List extends React.Component {
  componentWillMount() {
    this.props.requestShoppingLists();
  }

  render () {
    let list
    if (this.props.shopping_list)
      list = Object.keys(this.props.shopping_list.shopping_list_items).map(id => (
               <ListItem key={id}
                 item={this.props.shopping_list.shopping_list_items[id]}
                 toggleItem={this.props.toggleItem}
                 deleteItem={this.props.deleteItem}
                 />)
             )
    else
      list = Object.keys(this.props.shopping_lists).map(id => (
                  <ListList key={id}
                    item={this.props.shopping_lists[id]}
                    onClick={this.props.selectList.bind(null, id)}
                    deleteList={this.props.deleteList.bind(null, id)}
                    />)
              )

    return (
      <ul className='shopping-list'>
        {(this.props.shopping_list ?
          <ListHeader list={this.props.shopping_list}
                      updateList={this.props.updateList}
                      deselectList={this.props.deselectList} /> :
          <li className='list-header' onClick={this.props.createList}>create list</li>)}
      {
        list
      }
        {
          (this.props.shopping_list ?
          <ListItemForm selectedListId={this.props.shopping_list.id}
                        createListItem={this.props.createListItem} /> :
          '')
        }
      </ul>
    )
  }
}

export default List
