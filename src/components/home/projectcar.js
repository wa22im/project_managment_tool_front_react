import React, { Component } from "react";
import { Table, Header, Item, Button, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import {
  Link
}
from 'react-router-dom'
import Loader from "../shared/loader";

import { connect } from "react-redux";

import { getProjects } from "../../redux/action/projectActions";
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
    };
  }
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    console.log(projects);
    return !projects ? (
      <Loader />
    ) : (
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
          {projects.map((project , index) => (
            <Table.Row
            key={index}
            >
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
                        <Moment format="YYYY/MM/DD">{project.starDate}</Moment>
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
                  <Button icon labelPosition="left" as="a" color="blue">
                    <Icon name="flag" />
                    Project Board
                  </Button>
                  <Link 
                  
                  to={`/updateproject/${project.projectId}`}>
                  <Button icon labelPosition="left" color="green">
                    <Icon name="sticky note" />
                    update projcet
                  </Button>
                  </Link>
                  <Button active icon labelPosition="left" color="red">
                    <Icon name="delete calendar" />
                    delete project
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
         
        </Table.Body>
      </Table>
    )}  

}

const mapPropsfromState = (state) => ({
  projects: state.project.projects,
});
export default connect(mapPropsfromState, { getProjects })(ProjectCard);
