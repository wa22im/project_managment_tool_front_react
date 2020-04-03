import React,{Component} from "react";


import { Grid, Header } from "semantic-ui-react";
import Dashboard from "./dashboard";
import CreateNewProjectBtn from "../createnewprojectbtn";




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render(){
 
  return (
      <React.Fragment>


        <Grid
          style={{
            marginLeft: "5em",
            height: "100%",
            width: "100%"
          }}
        >
          <Grid.Row centered>
            <Header textAlign="center" size="huge">
              My Projects{" "}
            </Header>
          </Grid.Row>
          <Grid.Row>
            <CreateNewProjectBtn />
          </Grid.Row>
          <Grid.Row>
            <Dashboard />
          </Grid.Row>
        </Grid>
</React.Fragment>
     
  );
}
}

export default Home;
