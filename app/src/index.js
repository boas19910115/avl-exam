import React from 'react'
import 'services/firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'reduxStore'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
