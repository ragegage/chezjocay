import React from 'react'

class IngredientForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update (name) {
    return (e) => this.setState({ name: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createIngredient(this.state)
    this.setState({ name: '' })
  }

  render () {
    return (
      <form>
        <input placeholder='name'
               value={this.state.name}
               onChange={this.update('name')} />
        <input type='submit' onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default IngredientForm
