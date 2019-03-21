import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import Items from './Items'
import { Segment, Header, Button, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { name } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        {/* <Button as={Link} to = {`/departments/${this.props.match.params.id}/items`} color="blue">
          View Items
        </Button> */}
        {/* <Button as={Link} to={`/department/update${department.id}`} color="red">
          Edit
        </Button> */}
        <Items departmentId={this.props.match.params.id} />
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

export default DepartmentView;