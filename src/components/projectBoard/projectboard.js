import React, { Component } from "react";

import { Grid, Button, Container, Header, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { getProjectTasks ,deleteProjectTask } from "../../redux/action/backlogactions";
import { Link,withRouter } from "react-router-dom";
import Proptypes from "prop-types";
import ProjectTask from "./projecttasks/projectTask";

class ProjectBoard extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;

    this.state = {
      project_tasks: this.props.project_tasks,
      id: id,
      todoTab: [],
      progressTab: [],
      doneTab: [],
    };
  }


  checkBacklogId(id){
    
    return this.props.projects.findIndex(proj=>proj.projectId===id) ===-1  

  
  }

  componentDidMount() {
    if(this.checkBacklogId (this.state.id)) 
    this.props.history.push("/dashboard")
    this.props.getProjectTasks(this.state.id);
  }

  displayprojectCards() {
    this.props.project_tasks.sort((a,b)=>a.periority<b.periority)
    return (
      <React.Fragment>
        <Grid.Column>
          {this.props.project_tasks.map((project, index) => {
            if (project.status == "TO DO")
              return <ProjectTask
              deletetask = {this.props.deleteProjectTask}
              backlog_id={this.state.id}              
              project={project} />;
          })}
        </Grid.Column>

        <Grid.Column>
          {this.props.project_tasks.map((project, index) => {
            if (project.status == "EN PROGRESS")
              return <ProjectTask project={project}  
              deletetask = {this.props.deleteProjectTask}

              backlog_id={this.state.id}   

              />;
          })}
        </Grid.Column>

        <Grid.Column>
          {this.props.project_tasks.map((project, index) => {
            if (project.status == "DONE")
              return <ProjectTask  
              deletetask = {this.props.deleteProjectTask}

              backlog_id={this.state.id}              
              project={project} />;
          })}
        </Grid.Column>
      </React.Fragment>
    );
  }

  render() {
    return !this.props.project_tasks ? (
      ""
    ) : (
      <Container
        style={{
          height: "100vh",
        }}
      >
        <Grid
          celled
          style={{
            margin: "2em",
          }}
        >
          <Grid.Row
            style={{
              margin: "2em",
            }}
            width={3}
          >
            <Link to={`/addprojecttask/${this.props.match.params.id}`}>
              <Button>create Project Task</Button>
            </Link>
          </Grid.Row>
          <Grid.Row
            style={{
              margin: "2em",
            }}
          >
            <Grid
              columns="three"
              padded
              reversed="tablet"
              columns="equal"
              divided
            >
              <Grid.Row>
                <Grid.Column
                  style={{
                    margin: "1em",
                    background: "#36363b",
                    color: "#FFFFFF",
                    textALign: "centre",
                  }}
                >
                  <Header inverted as="h1" textAlign="center">
                    TO DO
                  </Header>
                  <Divider />
                </Grid.Column>
                <Grid.Column
                  style={{
                    margin: "1em",

                    background: "#2a2afa",
                    color: "#FFFFFF",
                    textALign: "centre",
                  }}
                >
                  <Header as="h1" inverted textAlign="center">
                    In progress
                  </Header>
                  <Divider />
                </Grid.Column>
                <Grid.Column
                  style={{
                    margin: "1em",

                    background: "#119955",
                    color: "#FFFFFF",
                    textALign: "centre",
                  }}
                >
                  <Header as="h1" inverted textAlign="center">
                    DONE
                  </Header>
                  <Divider />
                </Grid.Column>
              </Grid.Row>
              {this.props.project_tasks ? this.displayprojectCards() : ""}
            </Grid>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

ProjectBoard.propTypes = {
  getProjectTasks: Proptypes.func.isRequired,
  deleteProjectTask: Proptypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  project_tasks: state.backlog.project_tasks,
  projects : state.project.projects
});

export default withRouter(connect(mapStateToprops, { deleteProjectTask,getProjectTasks })(ProjectBoard));
