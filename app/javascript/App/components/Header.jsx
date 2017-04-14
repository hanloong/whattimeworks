import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default ({ date }) => (
  <nav className='navbar navbar-light bg-faded'>
    <form className='form-inline'>
      <Link
        to='/'
        className='navbar-brand'>
        { date.format('dddd, MMMM Do YYYY') }
      </Link>

      <Link
        className='btn btn-outline-primary'
        to='/settings'>
        Settings
      </Link>
    </form>
  </nav>
)
