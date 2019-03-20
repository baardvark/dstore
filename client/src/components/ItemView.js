import React from "react";
import axios from "axios";
import { Segment, Header, Button, } from "semantic-ui-react";

class ItemView extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
  }

  render() {
    const { name, price } = this.state.item;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h5" color="grey">${ price }</Header>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default ItemView;