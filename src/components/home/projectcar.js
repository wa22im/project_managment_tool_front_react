import React, { Component } from "react";
import { Table, Header, Item, Button, Icon } from "semantic-ui-react";
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
          <Table.Row>
            <Table.Cell width={2}>
              <Header as="h1" content="Project Id" />
            </Table.Cell>
            <Table.Cell width={10}>
              <Item
                style={{
                  fontSize: "1.5em",
                  margin: "1%"
                }}
              >
                <Item.Content s>
                  <Item.Header as="h3">Arrowhead Valley Camp</Item.Header>
                  <Item.Meta>
                    <span className="price">$1200</span>
                    <span className="stay">1 Month</span>
                  </Item.Meta>
                  <Item.Description>
                    {" "}
                    <p>
                      Many people also have their own barometers for what makes
                      a cute dog.vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    </p>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Table.Cell>
            <Table.Cell width={10}>
              <Button.Group
                vertical
                style={{
                  width: "100%"
                }}
              >
                <Button icon labelPosition="left" as="a" color="blue">
                  <Icon name="flag" />
                  Project Board
                </Button>
                <Button icon labelPosition="left" color="green">
                  <Icon name="sticky note" />
                  update projcet
                </Button>
                <Button active icon labelPosition="left" color="red">
                  <Icon name="delete calendar" />
                  delete project
                </Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default ProjectCard;
