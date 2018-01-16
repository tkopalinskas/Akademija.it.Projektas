import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Navigation/Hello'
import Admin from './Admin'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Visit from './Visit/Visit'


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route path="/hi/" name="hello" component={Hello} />
            <Route exact path ="/admin" name="admin" component={Admin} />
            <Route path ="/admin/register" name="register" component={Register} />
            <Route exact path ="/admin/visit" name="visit" component={Visit} />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

