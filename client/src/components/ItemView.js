import React from "react";
import axios from "axios";
import { Segment, Header, Button, } from "semantic-ui-react";

class ItemView extends React.Component {
  state = { item: [], };

  componentDidMount() {
    // debugger
    const { pathname } = this.props.location
    // axios.get(`/departments/${this.props.match.params.id}/items/${this.props.match.params.id}`)
      axios.get('/api'+ pathname)
      .then( res => {
        this.setState({ item: res.data, });
      })
  }

  render() {
    const { item, } = this.state;

    return (
      <div>
        <Segment>
          <Header as="h1">{ item.name }</Header>
          <Header as="h5" color="grey">${ item.price }</Header>
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