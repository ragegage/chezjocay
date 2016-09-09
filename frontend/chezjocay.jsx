import React from 'react'
import { render } from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()

  window.store = store

  const root = document.getElementById('luv-you-joc')
  render(<Root store={store}/>, root)
})
