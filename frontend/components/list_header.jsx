import React from 'react'

class ListHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      input: this.props.list.name
    }
  }

  updateList() {
    this.setState({
      editing: true
    })
  }

  change(e) {
    this.setState({input: e.currentTarget.value})
  }

  submit(e) {
    e.preventDefault()
    this.props.updateList({
      id: this.props.list.id,
      name: this.state.input
    })
    this.setState({editing: false})
  }

  render () {
    return (
      <li className='list-header'>
        {(this.state.editing ?
          <form onSubmit={(e) => this.submit(e)}>
            <input type='text' value={this.state.input}
                   onChange={(e) => this.change(e)} />
          </form> :
          <span onClick={() => this.updateList()}>{this.props.list.name}</span>
        )}
        <button onClick={this.props.deselectList}>deselect list</button>
      </li>
    )
  }
}

export default ListHeader
