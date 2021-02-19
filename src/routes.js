import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import Starterkit from './pages/StarterKit';
import Support from './pages/Support';
import Login from './pages/Login'

// import { isAuthorizated } from "./utils";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthorizated() === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <BrowserRouter basename="/">
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/dashboard" exact={true} component={Dashboard} />
      <Route path="/documentation" exact={true} component={Documentation} />
      <Route path="/starterkit" exact={true} component={Starterkit} />
      <Route path="/support" exact={true} component={Support} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>

);