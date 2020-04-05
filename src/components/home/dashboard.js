import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ProjectCard from "./projectcar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Grid
          style={{
            marginTop: "2%",
          }}
        >
          <Grid.Row
            style={{
              width: "100vw",
            }}
            width={20}
          >
            <ProjectCard />
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Dashboard;
