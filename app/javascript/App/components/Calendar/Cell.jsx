import React from 'react'

export const Cell = ({ time, zone }) => (
  <td key={ zone }>{ time }</td>
)
