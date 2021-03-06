import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
            <aside className="main-sidebar">

  
    <section className="sidebar">

    
      <div className="user-panel">
        <div className="pull-left image">
          <img src="admin-lte/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
        </div>
        <div className="pull-left info">
          <p> </p>
         
          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

    
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" />
          <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>

      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">HEADER</li>
   
        <li className="active">
        <Link to="/"><i className="fa fa-link"></i> <span>Home</span></Link>
        </li>
        <li>
         <Link to="/contact"><i className="fa fa-link"></i> <span>Contact</span></Link>
        </li>
        <li className="treeview">
           <Link to="/contact"><i className="fa fa-link"></i> <span>Multilevel</span>
            <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
          </Link>
          <ul className="treeview-menu">
            <li> <Link to="/contact">Link in level 2</Link></li>
            <li> <Link to="/contact">Link in level 2</Link></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>

      </div>
    );
  }
}

    
