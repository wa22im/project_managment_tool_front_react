import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
class CreateNewProjectBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Link to="/addprojec">
          <Button as="a" size="huge" primary>
            Create New Projct
          </Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default CreateNewProjectBtn;
