import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

import './assets/css/styles.css'
import 'antd/dist/antd.css'

class Index extends Component {
  render () {
     return (
       <Router>
          <div>
            <Route path='/' name='brasil' component={App} />
           </div>
        </Router>
     )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
