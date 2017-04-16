import React, { Component } from 'react'
import moment from 'moment-timezone'
import { Link } from 'react-router-dom'
import SettingsMatchesOnly from './Settings/MatchesOnly'

export default ({ state, actions }) => (
  <div className='container'>
    <div className='row pt-5'>
      <form>
        <h1 className='pb-2'>Settings</h1>
        <SettingsMatchesOnly
          checked={ state.matchesOnly }
          onChange={ actions.toggleMatchesOnly } />
        <Link
          to='/'
          role='button'
          className='btn btn-primary'>
          Done
        </Link>
      </form>
    </div>
  </div>
)
