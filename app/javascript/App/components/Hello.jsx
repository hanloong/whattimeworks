import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name }) => (
  <div>Hello {name}!</div>
)

Hello.defaultProps = {
  name: 'Fred'
}

Hello.propTypes = {
  name: React.PropTypes.string
}

module.exports = Hello;
