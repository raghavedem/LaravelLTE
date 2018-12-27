import React ,{Component} from 'react';

class Mainheader extends Component {

	constructor(props) {
		super(props);
	}

	render() {

    let Logout = (e) => {
      e.preventDefault();
      axios.post('/logout').then(res=>console.log(res.data)).catch(err=>console.log(err));
      window.location = "/login";
    } 
		return (
			<div>
	<header className="main-header">
    <a href="index2.html" className="logo">
     
      <span className="logo-mini"><b>A</b>LT</span>
     
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>

  
    <nav className="navbar navbar-static-top" role="navigation">
   
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
    
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <li className="dropdown user user-menu">
        
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
             
              <img src="admin-lte/img/user2-160x160.jpg" className="user-image" alt="User Image" />
         
              <span className="hidden-xs">Admin</span>
            </a>
            <ul className="dropdown-menu">
             
              <li className="user-header">
                <img src="admin-lte/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                <p>
                  Admin
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
         
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              
              </li>
            
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="javascript:void(0)" onClick={Logout} className="btn btn-default btn-flat">Logout</a>
                </div>
              
              </li>
              

            </ul>
          </li>
       
          <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
			</div>
		);
	}
}

export default Mainheader;