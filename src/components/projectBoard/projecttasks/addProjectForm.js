import React, { Component } from "react";
import {Dropdown, Button, Form, Grid, Header, Segment ,Icon} from "semantic-ui-react";


import {connect} from "react-redux"

import {addProjectTask} from '../../../redux/action/backlogactions'

import PropTypes from 'prop-types' ; 
import { withRouter } from "react-router-dom";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const {id } = this.props.match.params
    this.state = {
      isLoading: false,
      summary: "",
      projectId: id,
      acceptanceCriteria: "",
      dueDate: "",
      finishDate: "",
      dimmerLoading: true,
      isLoading: false,
      status:"TO-DO",

      periority:0 , 
      optionsStatus : [
        { key: 1, text: 'TO-DO', value:  'TO-DO' },
        { key: 2, text: 'DONE', value: 'DONE' },
        { key: 3, text: 'EN PROGRESS', value: 'EN PROGRESS' },
      ],
      options : [
        { key: 1, text: 'One', value: 1 },
        { key: 2, text: 'Two', value: 2 },
        { key: 3, text: 'Three', value: 3 },
      ]
    };
  }

  handlePrioChange = (e,{value}) => { 
    
    
    
    this.setState({ periority:value } ) 
  
  console.log(this.state)
  }
  handleStatusChange = (e,{value}) => this.setState({ status:value } )

  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  handleSubmit= ()=> {
    const   {
      summary,
      status,
      acceptanceCriteria,
      periority,
      dueDate
    } = this.state  
    
    const projectTask = {
      summary,
      status,
      acceptanceCriteria,
      periority,
      dueDate
    }

    console.log(projectTask)

    this.props.addProjectTask(this.state.projectId,projectTask,this.props.history)
  }
  render() {
    const {
      summary,
      acceptanceCriteria,
      dueDate,
      options,
      isLoading,
      status,
      optionsStatus , 
      periority
    } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 850 }}>
          <Header as="h2" textAlign="center">
            Updat e Project !!
          </Header>
          <Form loading={isLoading} onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name={"summary"}
                value={summary}
                onChange={this.handleChange}
                icon="add square"
                iconPosition="left"
                placeholder="name of the project"
              />

              <Form.Input
                placeholder="add acceptance Criteria"
                height={6}
                name={"acceptanceCriteria"}
                value={acceptanceCriteria}
                onChange={this.handleChange}
              />
              <Form.Field>
                <Form.Input
                  fluid
                  label="Due  date"
                  labelPosition="left"
                  icon="write square"
                  iconPosition="left"
                  placeholder="start date"
                  type="date"
                  name={"dueDate"}
                  value={dueDate}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment 
              fluid
              floated="left"
              >
              <Dropdown
              icon
              onChange={this.handlePrioChange}
              options={options}
              placeholder='Choose a priority'
              selection
              name='periority'
              value={periority}
              />
              <Icon name="add"/>
              </Segment>
              <Segment 
              fluid
              floated="left"
              >
              <Dropdown
              icon
              onChange={this.handleStatusChange}
              options={optionsStatus}
              placeholder='Choose a status'
              selection
              name="status"
              value={status}
              />
              <Icon name="add"/>
              </Segment>
              <Button
                color={"grey"}
                type="submit"
                onSubmit={this.handleSubmit}
                fluid
                size="large"
              >
                update Project
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}




addProjectTask.PropTypes={
  addProjectTask : PropTypes.func.isRequired
}


export default  withRouter(connect(null , {addProjectTask})( AddProjectTask));
