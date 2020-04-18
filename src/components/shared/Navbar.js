import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/action/securityActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types'


class MyNavbar extends Component {
  state = { disabeleditem : true , activeItem: "home" , login:'login'  ,logout:'logout',infoAthu : ''  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


componentDidMount (){
  const {validToken , user} = this.props.security  

  if (validToken , user ) {
    this.setState({ 
      infoAthu:this.state.logout , 
      disabeleditem: false
    })
  }
  else { this.setState({ 
    infoAthu:this.state.login , 
    disabeleditem: true
  })

  }
}


  render() {
    const { activeItem , login  , logout , infoAthu  , disabeleditem } = this.state;
    const {validToken , user} = this.props.security  
 
 
    return (
      <Segment inverted>
        <Menu inverted>
          <Menu.Item name="my Project  Managmnt app" />
          <Link to="/dashboard">
            <Menu.Item
            disabled={disabeleditem}
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            ></Menu.Item>
          </Link>
          <Menu.Menu position="right">
            <Menu.Item
              content={infoAthu}
              name={infoAthu}
              active={activeItem === {infoAthu}}
              onClick={()=>{this.props.logout
              window.location.href='/'
              }}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}



MyNavbar.propTypes ={ 

  logout : PropTypes.func.isRequired
}




const mapStateToProps =state =>({
  security : state.security
})

export default  connect(mapStateToProps , {logout})(MyNavbar);
