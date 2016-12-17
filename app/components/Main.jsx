import React from 'react';
import Nav from 'Nav';
import '../styles/navbar-side.css';
export default class Main extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
         <div id="wrapper">
              <div id="sidebar-wrapper">
                <Nav></Nav>
             </div>
             
             <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    </div>
    )
  }
}
