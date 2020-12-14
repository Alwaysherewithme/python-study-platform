import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { connect } from "react-redux";
import * as auth from "./services/Session";

const App = () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          // component={withTracker(props => {
          //   if (auth.isLoggedIn() === true) {
          //     return (
          //       <route.layout {...props}>
          //         <route.component {...props} />
          //       </route.layout>
          //     );
          //   } else {
          //     return (
          //       <Redirect
          //         to={{
          //           pathname: "/sign-in"
          //           // state: { from: props.location }
          //         }}
          //       />
          //     )
          //   }
          // })}
          //         )
          //       }
          // })}
          // render={props => {
          //   if (auth.isLoggedIn() === true) {
          //     return (
          //       <route.layout {...props}>
          //         <route.component {...props} />
          //       </route.layout>
          //     )
          //   } else {
          //     return (
          //       <Redirect
          //         to={{
          //           pathname: "/"
          //           // state: { from: props.location }
          //         }}
          //       />
          //     )
          //   }
          // }
          // }
          // >
          />
        )
      })}
    </div>
  </Router>
);

const mapStateToProps = (state) => {
  return {
    // {
    //   signinUserId: state.signinUserId
    // }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // signin: () => {
    //   dispatch({})
    // },
    // signout: () => {
    //   dispatch({
    //     type: 'addNum',
    //     num: 5
    //   })
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)