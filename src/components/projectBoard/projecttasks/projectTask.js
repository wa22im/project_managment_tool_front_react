import React, { Component } from "react";

import { Card, Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

import {  deleteProjectTask } from "../../../redux/action/backlogactions";

import { connect } from "react-redux";


class ProjectTask extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  deletetaska=()=> {

    


    this.props.deleteProjectTask(
      this.props.backlog_id,
      this.props.project.projectSequence
    );
  }
  getColor() {
    let color = this.props.project.periority;
    console.log(color);
    switch (color) {
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return "blue";
    }
  }



  render() {
    const {
      periority,
      summary,
      dueDate,
      acceptanceCriteria,
      projectSequence,
    } = this.props.project;
    return (
      <Card color={this.getColor()}>
        <Card.Content>
          <Card.Header>{periority}</Card.Header>
          <Card.Meta>dueDate : {dueDate.slice(0, 10)}</Card.Meta>
          <Card.Description>
            summary : {summary}
            <br />
            <strong>{acceptanceCriteria}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link
              to={`/updateprojecttask/${this.props.backlog_id}/${projectSequence}`}
            >
              <Button basic color="green">
                View/Update
              </Button>
            </Link>
            <Button onClick={this.deletetaska} basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(null , {deleteProjectTask})(ProjectTask);
