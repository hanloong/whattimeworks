import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loadState, saveState } from './stores/localStorage'
import throttle from 'lodash/throttle'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const persistedState = loadState()
const store = createStore(reducer, persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState())
}), 1000)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  )
});
