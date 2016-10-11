import React from 'react'

class RecipeSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayForm: false,
      name: '',
      url: '',
      entree: false,
      soup: false,
      salad: false,
      dessert: false,
      appetizer: false,
      tags: '',
      notes: '',
    }
  }

  componentWillMount() {
  }

  update(name) {
    return (e) => this.setState({[name]: e.currentTarget.value})
  }

  onClick(e) {
    e.preventDefault()
    this.setState({displayForm: true})
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.createRecipe({...this.state})
    this.resetState.bind(this)
  }

  resetState() {
    this.setState({
      displayForm: false,
      name: '',
      url: '',
      entree: false,
      soup: false,
      salad: false,
      dessert: false,
      appetizer: false,
      tags: '',
      notes: ''
    })
  }

  render () {
    if(this.state.displayForm)
      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' value={this.state.name} onChange={this.update('name').bind(this)} placeholder='name' />
          <input type='text' value={this.state.url} onChange={this.update('url').bind(this)} placeholder='url' />
          <label>Entree<input type='checkbox' /></label>
          <label>Soup<input type='checkbox' /></label>
          <label>Salad<input type='checkbox' /></label>
          <label>Dessert<input type='checkbox' /></label>
          <label>Appetizer<input type='checkbox' /></label>
          <input type='text' value={this.state.tags} onChange={this.update('tags').bind(this)} placeholder='tags' />
          <input type='text' value={this.state.notes} onChange={this.update('notes').bind(this)} placeholder='notes' />
          <input type='submit' value='Create Recipe' />
        </form>
      )
    else
      return (
        <button onClick={this.onClick.bind(this)}
                className='create'>+</button>
      )
  }
}

export default RecipeSearch
