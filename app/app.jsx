import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import $ from 'jquery';
import jQuery from 'jquery';


import Main from 'Main';
import Groups from 'Groups';
import MyGroups from 'MyGroups';
import Profile from 'Profile';
import ToDo from 'ToDo';
import Dashboard from 'Dashboard';
import Notes from 'Notes';


import 'style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="groups" component={Groups}></Route>
        <Route path="mygroups" component={MyGroups}></Route>
        <Route path="profile" component={Profile}></Route>
        <Route path="todo" component={ToDo}></Route>
        <Route path="notes" component={Notes}></Route>
            <IndexRoute component={Dashboard}/>
        </Route>
    </Router>, document.getElementById("app"));