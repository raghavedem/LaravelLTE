
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Home from './Home'
import Contact from './Contact'

    class Dashboard extends Component {
      render () {
        return (
            <div>
              <Header />
              <Sidebar />
               <section className="content container-fluid">
               <Route exact path="/" component={Home} />
               <Route path="/contact" component={Contact} />
               </section>
            </div>
        )
      }
    }

export default Dashboard;    