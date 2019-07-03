import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import App from 'containers/app';
import Home from 'containers/home';

const routes = [
  {
    path: '/app',
    component: App,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
];

class Router extends React.Component {
  render(){
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app" />}/>
          {
            routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))
          }
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Router;