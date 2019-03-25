
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  // console.log(state)
  return {
    loggedIn: Boolean(state.session.id),
}};

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
  

  

const Protected = ({ component: Component, path, loggedIn }) => {
  // debugger
  // <Route path={path}  render={(props) => (
  //   loggedIn ? (
  //     <Component {...props} />
  //   ) : (
  //     <Redirect to="/" />
  //   )
  // )}/>
   const retVal = (<Route
        path={path}
        render={props => {
            console.log(props)
            return loggedIn ? (
            <Component {...props} />)
             : 
             (<Redirect to="/login" />)
        }}
    />)
    return retVal;
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected)); 