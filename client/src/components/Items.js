import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ items: res.data, });
      })
  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <Header as="h2">No Items Found</Header>
    return items.map( item => (
      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Button as={Link} to={`/items/${item.id}`} color="blue">
          View
        </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Items</Header>
        <Button as={Link} to="/items/new" color="blue">
          Add Item
        </Button>
        <br />
        <br />
        <Card.Group>
          { this.renderItems() }
        </Card.Group>
      </div>
    )
  }
}

export default Items;