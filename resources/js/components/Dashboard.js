
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Mainheader from './layout/Mainheader'
import Sidebar from './layout/Sidebar'
import Home from './Home'
import Contact from './Contact'

    class Dashboard extends Component {
      render () {
        return (
            <div>
              <Mainheader />
              <div className="content-wrapper">
              <Header />
              <Sidebar />
               <section className="content container-fluid">
               <Route exact path="/" component={Home} />
               <Route exact path="/home" component={Home} />
               <Route path="/contact" component={Contact} />
               </section>
               </div>
               <Footer />
            </div>
        )
      }
    }

export default Dashboard;    