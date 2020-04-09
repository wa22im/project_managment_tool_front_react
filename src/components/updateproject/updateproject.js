import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { getProject  ,updateProject} from "../../redux/action/projectActions";
import { withRouter } from "react-router-dom";
import MyLoader from "../shared/loader";

class UpdateProjectFrom extends Component {
  state = {
    project: this.props.project,
    isLoading: false,
    projectName: "",
    projectId: "",
    discription: "",
    starDate: "",
    finishDate: "",
    dimmerLoading: true,
    isLoading:false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
    setTimeout(() => {
      this.setState(
        {
          projectName: this.props.project.projectName,
          projectId: this.props.project.projectId,
          discription: this.props.project.discription,
          starDate: this.props.project.starDate.slice(0,10),
          finishDate: this.props.project.finishDate.slice(0,10),
        },
        () => {
          this.setState({
            dimmerLoading: false,
          });
        }
      );
    }, 2000);
  }

  handleChange = (event) => {
    console.log([event.target.name], event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkdate = () => {
    return (
      new Date() <= new Date(this.state.starDate) &&
      new Date(this.state.starDate) < new Date(this.state.finishDate)
    );
  };
  handleSubmit = () => {
    let error;
    this.setState({
      isLoading: true,
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
      const { id } = this.props.match.params;

      
      this.props.updateProject(project,id,this.props.history)

this.setState({
        isLoading: false,
      });
    } else {
      setTimeout(
        () =>
          this.setState({
            isLoading: false,
          }),
        2000
      );
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
      dimmerLoading,
    } = this.state;

    return dimmerLoading ? (
      <MyLoader />
    ) : (
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
                name={"projectName"}
                value={projectName}
                onChange={this.handleChange}
                icon="add square"
                iconPosition="left"
                placeholder="name of the project"
              />

              <Form.Input
                disabled={true}
                fluid
                icon="key"
                iconPosition="left"
                placeholder="id project... "
                name={"projectId"}
                value={projectId}
                onChange={this.handleChange}
              />

              <Form.Input
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
                update Project
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

UpdateProjectFrom.propTypes = {
  updateProject: Proptypes.func.isRequired,

  getProject: Proptypes.func.isRequired,
  project: Proptypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.backlog.projects,
});
export default withRouter(
  connect(mapStateToProps, { updateProject, getProject })(UpdateProjectFrom)
);
