import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const MyLoader= ()=>(
    <Segment
    style={{
      height:"100vh",
      width: "100vw"    }}
    >
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </Segment>
)

export default MyLoader