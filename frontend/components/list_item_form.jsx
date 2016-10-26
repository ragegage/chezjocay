import React from 'react'

class ListItemForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {name: ''}

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <input type='text' value={this.state.name}
                  onChange={this.handleChange} />
      </form>
    )
  }

  handleChange (e) {
    this.setState({ name: e.target.value })
  }

  submit(e) {
    e.preventDefault()
    this.props.createListItem({name: this.state.name, shopping_list_id: this.props.selectedListId, recipe_id: 0})
    this.setState({name: ''})
  }
}

export default ListItemForm