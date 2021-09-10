import React, { Component } from "react";
import { Form } from "react-bootstrap";
class FormCard extends Component {
	render() {
		return (
			<div>
				<Form.Select
					aria-label="Default select example"
					onChange={(e) => {
						this.props.filerData(e);
					}}
				>
					<option value="all">Open this select menu</option>
					<option value="electric engineer">electric engineer</option>
					<option value="mechanical engineer">mechanical engineer</option>
					<option value="civil engineer">civil engineer</option>
				</Form.Select>
			</div>
		);
	}
}

export default FormCard;
