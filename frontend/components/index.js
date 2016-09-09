import React from 'react'

export default ({ recipes }) => (
  <ul>
  {
    Object.keys(recipes).map(id => {
      return (<li>{recipes[id].name}</li>)
    })
  }
  </ul>
)
