
 import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
           
             <Dashboard />
            
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))