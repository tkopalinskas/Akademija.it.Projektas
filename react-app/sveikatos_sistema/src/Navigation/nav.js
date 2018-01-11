import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';

var InitialApp = (props) => {
    return <div>{props.children}</div>;
};

var NoMatch = (props) => {
    return <div>Route did not match</div>;
};

goProducts = () => this.props.router.push("products");
// ir pats mygtukas kur nors į render() metodą
<p><button onClick={this.goProducts}
className="btn btn-primary"
role="button">
Go to Products
</button></p>

var DemonstruotiNavigacija = (props) => {
    var goApp = () => props.router.push("/");
    return (
    <div>
    At route: {props.router.getCurrentLocation().pathname}
    <button onClick={goApp}>Go to App</button>
    <pre>
    {JSON.stringify(props, null, 2)}
    </pre>
    </div>
    );
};
ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={InitialApp}>
    <IndexRoute component={App} />
    <Route path="/products" component={DemonstruotiNavigacija} />
    <Route path="/products/:id" component={DemonstruotiNavigacija} />
    <Route path="/help" component={DemonstruotiNavigacija} />
    <Route path="*" component={NoMatch}/>
    </Route>
    </Router>
    ), document.getElementById('root'));