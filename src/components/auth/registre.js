import React from "react";

import {
  createNewUser
}
from '../../redux/action/securityActions'

import Proptypes from "prop-types"

import {connect } from "react-redux"
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";


class Register extends React.Component {
  state = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: [],
    loading: false,
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.ispasswordValid(this.state)) {
      error = { message: "password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ fullName, username, password, confirmPassword }) => {
    return (
      !fullName.length ||
      !username.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  ispasswordValid = ({ password, confirmPassword }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });

      const {
        username,fullName,password,confirmPassword
      }
      = this.state

    const newuser = {
      username,fullName,password,confirmPassword
    }
    this.props.createNewUser(newuser)
    this.setState({ errors: [], loading: false });




    
    }
  };



  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };

  render() {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      errors,
      loading
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for project managment 
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="fullName"
                icon="user"
                iconPosition="left"
                placeholder="fullName"
                onChange={this.handleChange}
                value={fullName}
                type="text"
              />

              <Form.Input
                fluid
                name="username"
                icon="mail"
                iconPosition="left"
                placeholder="mail  Address"
                onChange={this.handleChange}
                value={username}
                className={this.handleInputError(errors, "username")}
                type="username"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="password"
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Form.Input
                fluid
                name="confirmPassword"
                icon="repeat"
                iconPosition="left"
                placeholder="password Confirmation"
                onChange={this.handleChange}
                value={confirmPassword}
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="orange"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Already a user? <Link >Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}



Register.propTypes = {
  createNewUser: Proptypes.func.isRequired,
};

export default connect(null , {
  createNewUser
})
(Register);