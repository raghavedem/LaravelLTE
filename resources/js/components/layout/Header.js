 import React from 'react'
 import { Link } from 'react-router-dom'

    const Header = () => (
     <section className="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol className="breadcrumb">
        <li><Link to="/"><i className="fa fa-dashboard"></i> Level</Link></li>
        <li className="active">Here</li>
      </ol>
    </section>
    )

    export default Header