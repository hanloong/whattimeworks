import React from 'react'
import { Redirect } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

export default ({ date }) => (
  <AppBar
    title={ date.format('dddd, MMMM Do YYYY') } />
)
