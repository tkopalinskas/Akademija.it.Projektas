import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Navigation/Hello'
import Admin from './Admin'
import { HashRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route path="/hi/" name="hello" component={Hello} />
            <Route path ="/admin" name="admin" component={Admin} />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

