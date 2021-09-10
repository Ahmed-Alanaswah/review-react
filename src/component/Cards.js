import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
class Cards extends Component {
	render() {
		return (
			<>
				<Card style={{ width: "18rem" }}>
					<Card.Header>{this.props.name}</Card.Header>
					<ListGroup variant="flush">
						<ListGroup.Item>{this.props.age}</ListGroup.Item>
						<ListGroup.Item>{this.props.specialist}</ListGroup.Item>
					</ListGroup>
				</Card>
			</>
		);
	}
}

export default Cards;
