import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import Login from './login'
import Register from './registre'

const panes = [
  {
    menuItem: { key: 'login', icon: 'users', content: 'login' },
    render: () => <Tab.Pane>
        <Login/>
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'registre', icon: 'users', content: 'registre' },
    render: () => <Tab.Pane><Register/></Tab.Pane>,
  },
]

const LandingPage = () => <Tab 
style={{
  marginTop:"5%",
  marginLeft:"20%",
  marginRight:"20%",
}}
panes={panes} />

export default LandingPage