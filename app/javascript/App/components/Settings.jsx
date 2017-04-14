import React, { Component } from 'react'
import moment from 'moment-timezone'
import { Link } from 'react-router-dom'
import SettingsMatchesOnly from './Settings/MatchesOnly'
import SettingsZones from './Settings/Zones'

export default ({ state, actions }) => (
  <div className='container'>
    <div className='row pt-5 justify-content-md-center'>
      <div className='col col-lg-6'>
        <form>
          <h1 className='pb-2'>Settings</h1>
          <SettingsMatchesOnly
            checked={ state.matchesOnly }
            onChange={ actions.toggleMatchesOnly } />
          <SettingsZones
            zones={ state.zones }
            onChange={ actions.updateZones }/>
          <Link
            to='/'
            role='button'
            className='btn btn-primary'>
            Done
          </Link>
        </form>
      </div>
    </div>
  </div>
)
