import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <Link
        className='navbar-brand'
        to='/'>
        { this.props.date.format('dddd, MMMM Do YYYY') }
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className='nav-link'
              to='/settings'>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  }
}
