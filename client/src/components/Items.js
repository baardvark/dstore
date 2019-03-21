import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";

class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    const { departmentId } = this.props
    axios.get(`/api/departments/${departmentId}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
  }

  itemRemove = (id) => {
		axios.delete(`/api/departments/${this.props.departmentId}/items/${id}`)
			.then(res => {
				this.setState({
					items: this.state.items.filter(d => {
						if (d.id !== id)
            return d
					})
				})
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
          <Card.Meta>${ item.price }</Card.Meta>
        </Card.Content>
        <Card.Content extra>
        <Button as={Link} to={`/departments/${this.props.departmentId}/items/${item.id}`} color="blue">
          View
        </Button>
        <Button as = {Link}	to = {`/departments/${this.props.departmentId}/items/${item.id}`}	color = "green" >Edit </Button>
			  <Button onClick = {() => this.itemRemove(item.id)} color = "red" >Delete </Button> 
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Items</Header>
        <Button as={Link}
          to={`/departments/${this.props.departmentId}/items/new`}
          color="blue">
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