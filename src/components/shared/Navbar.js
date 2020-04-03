import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
class MyNavbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted>
          <Menu.Item name="my Project  Managmnt app" />
          <Link to="/dashboard">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            ></Menu.Item>
          </Link>
          <Menu.Menu position="right">
            <Menu.Item
              content="login"
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default MyNavbar;
