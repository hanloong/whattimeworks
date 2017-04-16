import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import moment from 'moment-timezone'
import { niceZone } from '../utils/formatter'

class ZoneAutoComplete extends Component {
  constructor(props) {
    super(props)

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleUpdate(event) {
    let { value, actions, index } = this.props
    if (value === '') {
      actions.addZone(event.value)
    } else {
      actions.updateZone(event.value, index)
    }
  }

  handleDelete() {
    let { actions, index } = this.props
    actions.deleteZone(index)
  }

  zones() {
    return moment.tz.names().map(zone => (
      { value: zone, text: niceZone(zone) })
    )
  }

  render() {
    const { zone, deletable } = this.props
    let deleteButton

    if (deletable) {
      deleteButton = <IconButton
        onTouchTap={ this.handleDelete }>
        <DeleteIcon />
      </IconButton>
    }

    return <div>
      <AutoComplete
        hintText="Type a timezone"
        dataSource={ this.zones() }
        fullWidth={ true }
        filter={ AutoComplete.fuzzyFilter }
        searchText={ niceZone(this.props.value) }
        onNewRequest={ this.handleUpdate } />
      { deleteButton }
    </div>
  }
}

module.exports = ZoneAutoComplete
