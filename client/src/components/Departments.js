import React from "react";
import axios from "axios";
import {Link,} from "react-router-dom";
import {Button, Card, Header,} from "semantic-ui-react";

class Departments extends React.Component {
	state = {
		departments: [],
	};

	componentDidMount() {
		axios.get("/api/departments")
			.then(res => {
				this.setState({
					departments: res.data,
				});
			})
	}

	departmentRemove = (id) => {
		axios.delete(`/api/departments/${id}`)
			.then(res => {
				this.setState({
					departments: this.state.departments.filter(d => {
						if (d.id !== id)
							return d
					})
				})
			})
	}

	renderDepartments = () => {
			const {departments,	} = this.state;
				if (departments.length <= 0)
				return <Header as = "h2" > No Departments Found </Header>
				return (
					departments.map(department => {
						return (

							<Card key = {department.id}>
			<Card.Content >
			<Card.Header >
			{department.name}
			</Card.Header>
			</Card.Content > 
			<Card.Content extra >
			<Button as = {Link}	to = {`/departments/${department.id}`}	color = "blue" >View </Button>
			<Button onClick = {() => this.departmentRemove(department.id)} color = "red" >Delete </Button> 
			</Card.Content >
			</Card>
							)
		}
			))
		}

	render() {
		return (
			<div>
				<Header as = "h1" > Departments </Header>
				<Button as = {Link}	to = "/departments/new"	color = "blue" >Add Department </Button>
			<br />
			<br />
			<Card.Group>
			{this.renderDepartments()}
			</Card.Group>
			</div >
		)
	}
}

export default Departments;