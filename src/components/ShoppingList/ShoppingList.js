import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, Transition } from "react-transition-group";
import { v4 as uuid } from "uuid";
class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Watter" },
      { id: uuid(), name: "Apples" },
      { id: uuid(), name: "Bananas" },
    ],
  };
  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button color="dark"
        style={{margin:'2rem 0'}}
                onClick={() =>{
                 const name = prompt("Enter new item");
                 if (name) {
                     this.setState(
                         state =>({
                         items: [...state.items, {id: uuid(), name }]
                     })
                     )
                 }
                }}
        >Add item</Button>
      </Container>
    );
  }
}
export default ShoppingList;
