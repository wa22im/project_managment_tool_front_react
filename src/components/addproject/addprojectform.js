import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../redux/action/projectActions";
import { withRouter } from "react-router-dom";

class CreateProjectFrom extends Component {
  state = {
    errorProjectNamecontent: {
      content: "please entre a valid project name ",
      pointing: "below",
    },
    errorProjectIdcontent: {
      content: "Please enter the project Id ",
      pointing: "below",
    },
    errordiscriptioncontent: {
      content: "Please enter discription to your project",
      pointing: "below",
    },
    errorstarDatecontent: {
      content: "a starting date must not be passed",
      pointing: "below",
    },
    errorfinishDatecontent: {
      content: "a starting date must not be passed",
      pointing: "below",
    },
    errorProjectId: false,
    errordiscription: false,
    errorstarDate: false,
    errorfinishDate: false,
    errorProjectNamebool: false,

    isLoading: false,
    projectName: "",
    projectId: "",
    discription: "",

    starDate: "",
    finishDate: "",
  };

  handleChange = (event) => {
    console.log([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isValide = () => {
    const {
      projectName,
      projectId,
      discription,
      starDate,
      finishDate,
    } = this.state;

    if (!projectName) this.setState({ errorProjectName: true });
    if (!projectId) this.setState({ errorProjectIde: true });
    if (!discription) this.setState({ errordiscription: true });
    if (!starDate) this.setState({ errorstarDate: true });
    if (!finishDate) this.setState({ errorfinishDate: true });

    return projectName && projectId && discription && starDate && finishDate;
  };

  checkdate = () => {
    return (
      new Date() <= new Date(this.state.starDate) &&
      new Date(this.state.starDate) < new Date(this.state.finishDate)
    );
  };
  handleSubmit = () => {
    let error;
    let errors = {};
    this.setState({
      isLoading: true,
    });
    if (this.isValide()) {
      this.setState({
        errorProjectName: false,
        errorProjectIde: false,
        errordiscription: false,
        errorstarDate: false,
        errorfinishDate: false,
      });

      if (this.checkdate()) {
        const {
          projectName,
          projectId,
          discription,
          starDate,
          finishDate,
        } = this.state;
        const project = {
          projectName,
          projectId,
          discription,
          starDate,
          finishDate,
        };
        this.props.createProject(project, this.props.history);
        this.setState({
          isLoading: false,
          errors: [],
        });
      } else {
        error = { error: " please provide a valid date " };
        this.setState({
          Formerrors: error,

          isLoading: false,
        });
      }
    } else {
      error = { error: " form invalid" };

      this.setState({
        Formerrors: error,
        isLoading: false,
      });
    }
  };

  render() {
    const {
      projectName,
      projectId,
      discription,
      starDate,
      finishDate,
      isLoading,
      errorProjectIdcontent,
      errordiscriptioncontent,
      errorstarDatecontent,
      errorfinishDatecontent,
      errorProjectNamebool,
      errorProjectName,
      errorProjectId,
      errordiscription,
      errorProjectNamecontent,
      errorstarDate,
      errorfinishDate,
    } = this.state;
    const { errors } = this.props;
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
          {errors !== undefined ? this.showErrors : ""}
          <Form loading={isLoading} 
          error ={errors !== undefined? true : false }
          onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                error={errorProjectName ? errorProjectNamecontent : false}
                name={"projectName"}
                value={projectName}
                onChange={this.handleChange}
                icon="add square"
                iconPosition="left"
                placeholder="name of the project"
              />

              <Form.Input
                error={projectId ? errorProjectIdcontent : false}
                fluid
                icon="key"
                iconPosition="left"
                placeholder="id project... "
                name={"projectId"}
                value={projectId}
                onChange={this.handleChange}
              />

              <Form.Input
                error={errordiscription ? errordiscriptioncontent : false}
                placeholder="add discription"
                height={6}
                name={"discription"}
                value={discription}
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
                  name={"starDate"}
                  value={starDate}
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
                  name={"finishDate"}
                  value={finishDate}
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
              <Message
                error
                header="Action Forbidden"
                content={
                 this.props.errors
                }
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

CreateProjectFrom.propTypes = {
  createProject: Proptypes.func.isRequired,
  errors: Proptypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default withRouter(
  connect(mapStateToProps, { createProject })(CreateProjectFrom)
);
