import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  render(){
    return(       
        <div>    
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                      Group Crash
                    </a>
                </li>
                <li>
                   <Link to="/dashboard" >Dashboard </Link> 
                </li>
                <li>
                   <Link to="/groups" >Groups </Link> 
                </li>
                <li>
                   <Link to="/mygroups" >My Groups </Link> 
                </li>
                <li>
                    <Link to="/profile" >Profile </Link> 
                </li>
                <li>
                    <Link to="/todo" >To Do </Link> 
                </li>
                <li>
                    <Link to="/" >Calendar </Link> 
                </li>
                 <li>
                    <Link to="/notes" >My Notes </Link> 
                </li>
               
            </ul>
   </div>
        
        
        
    )
  }
}
