import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer theme='@kmarvin/january' />, div)
})
