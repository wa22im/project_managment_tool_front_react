import React, { Component } from "react";
import { Table, Header, Item, Button, Icon, Confirm } from "semantic-ui-react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Loader from "../shared/loader";

import { connect } from "react-redux";

import { getProjects, deleteProject } from "../../redux/action/projectActions";
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeloader: false,
      projects: this.props.projects,
      openConfirmation: false,
      projectToDelete: "",
    };
  }
  componentDidMount() {
    this.props.getProjects();
  }

  handledeleteProject = (projid) => {
    this.setState({
      projectToDelete: projid,
      openConfirmation: true,
    });
  };

  handleConfirm = () => {
    this.setState(
      {
        activeloader: true,
      },
      () => {
        this.props.deleteProject(this.state.projectToDelete);

        setTimeout(() => {
          this.props.getProjects();
          this.setState({
            activeloader: false,
            openConfirmation: false,
          });
        }, 1000);
      }
    );
  };

  handleCancel = () => {
    this.setState({
      openConfirmation: false,
    });
  };

  render() {
    const { projects } = this.props;
    return !projects || this.state.activeloader ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Table
          style={{
            width: "100vw",
          }}
          definition
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}> Project Id</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {projects.map((project, index) => (
              <Table.Row key={index}>
                <Table.Cell width={2}>
                  <Header as="h1" content={project.projectId} />
                </Table.Cell>
                <Table.Cell width={10}>
                  <Item
                    style={{
                      fontSize: "1.5em",
                      margin: "1%",
                    }}
                  >
                    <Item.Content s>
                      <Item.Header as="h3">{project.projectName}</Item.Header>
                      <Item.Meta>
                        <span className="price">
                          <Moment format="YYYY/MM/DD">
                            {project.starDate}
                          </Moment>
                        </span>
                        <span className="price">
                          <Moment format="YYYY/MM/DD">
                            {project.finishDate}
                          </Moment>
                        </span>
                      </Item.Meta>
                      <Item.Description>
                        {" "}
                        <p>{project.discription}</p>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Table.Cell>
                <Table.Cell width={10}>
                  <Button.Group
                    vertical
                    style={{
                      width: "100%",
                    }}
                  >
                    <Link 
                    to ={`/projectBoard/${project.projectId}`}
                    >
                      {" "}
                      <Button icon labelPosition="left" as="a" color="blue">
                        <Icon name="flag" />
                        Project Board
                      </Button>
                    </Link>

                    <Link to={`/updateproject/${project.projectId}`}>
                      <Button icon labelPosition="left" color="green">
                        <Icon name="sticky note" />
                        update projcet
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        this.handledeleteProject(project.projectId);
                      }}
                      icon
                      labelPosition="left"
                      color="red"
                    >
                      <Icon name="delete calendar" />
                      delete project
                    </Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Confirm
          style={{
            margin: "30% 30% 30% 30%",
            width: "25%",
            height: "15%",
          }}
          open={this.state.openConfirmation}
          content="This is a custom message"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </React.Fragment>
    );
  }
}

const mapPropsfromState = (state) => ({
  projects: state.project.projects,
});
export default connect(mapPropsfromState, { deleteProject, getProjects })(
  ProjectCard
);
