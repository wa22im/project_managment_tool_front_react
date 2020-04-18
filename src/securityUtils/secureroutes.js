import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import PropTypes from "prop-types";

class SecureRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { component: Component, security, ...otherProps } = this.props;

    return (
      <Route
        {...otherProps}
        render={(props) =>
          security.validToken ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}


SecureRoutes.prototype= {
    security:PropTypes.object.isRequired
}


const mapStateToProps = state =>({
    security : state.security
})

export default connect(mapStateToProps )(SecureRoutes);
