import React from 'react'
import ListItem from './list_item'
import ListList from './list_list'

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
                 />)
             )
    else
      list = Object.keys(this.props.shopping_lists).map(id => (
                  <ListList key={id}
                    item={this.props.shopping_lists[id]}
                    onClick={this.props.selectList.bind(null, id)}
                    />)
              )

    return (
      <ul className='shopping-list'>
      {
        list
      }
      </ul>
    )
  }
}

export default List
