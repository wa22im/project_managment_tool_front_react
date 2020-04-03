import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class CreateProjectFrom extends Component {
  state = {
    isLoading : false , 
    projectname: "",
    projectId: "",
    description: "",

    starDateStr: "",
    finishDateStr: ""
  };

  handleChange = event => {
    console.log([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  isValide = () => {
    const {
      projectname,
      projectId,
      description,
      starDateStr,
      finishDateStr
    } = this.state;

    return (
      projectname && projectId && description && starDateStr && finishDateStr
    );
  };

  checkdate = () => {
    return new Date() < new Date(this.state.starDateStr);
  };
  handleSubmit = () => {
    this.setState({
      isLoading:true
    })
    if (this.isValide()) {
      if (this.checkdate()) {console.log(this.state);
      this.setState({
        isLoading:false

      })}
      else {console.log(this.state);
        this.setState({
          isLoading:false
  
        })};
    } else {console.log(this.state);
      this.setState({
        isLoading:false

      })};
  };

  render() {
    const {
      projectname,
      projectId,
      description,
      starDateStr,
      finishDateStr,
      isLoading
    } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 850 }}>
          <Header as="h2" textAlign="center">
            Create A new Project !!
          </Header>
          <Form
          loading={isLoading}
          onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name={"projectname"}
                value={projectname}
                onChange={this.handleChange}
                icon="add square"
                iconPosition="left"
                placeholder="name of the project"
              />

              <Form.Input
                fluid
                icon="key"
                iconPosition="left"
                placeholder="id project... "
                name={"projectId"}
                value={projectId}
                onChange={this.handleChange}
              />

              <Form.Input
                placeholder="add description"
                height={6}
                name={"description"}
                value={description}
                onChange={this.handleChange}
              />
              <Form.Field>
                <Form.Input
                  fluid
                  label="start date"
                  labelPosition="left"
                  icon="write square"
                  iconPosition="left"
                  placeholder="start date"
                  type="date"
                  name={"starDateStr"}
                  value={starDateStr}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  label="finish date"
                  labelPosition="right"
                  icon="write square"
                  iconPosition="left"
                  placeholder="finish date"
                  type="date"
                  name={"finishDateStr"}
                  value={finishDateStr}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button
                color={"grey"}
                type="submit"
                onSubmit={this.handleSubmit}
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CreateProjectFrom;
