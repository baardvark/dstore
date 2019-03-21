import React from "react";
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";

class ItemForm extends React.Component {
  defaultValues = { name: "", price: "" };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state, };
    // const id = {this.props.history}
    axios.post(`/api/departments/${this.props.match.params.id}/items`, item)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.id}`);
      })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, price } = this.state;

    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              label="Name"
              placeholder="Name"
              name="name"
              required
              onChange={this.handleChange}
              value={name}
            />
             <Form.Input 
              label="Price"
              placeholder="Price"
              name="price"
              required
              onChange={this.handleChange}
              value={price}
            />
          </Form.Group>
          
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;