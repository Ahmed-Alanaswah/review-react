import React, { Component } from "react";
import Main from "./component/Main";
import Form from "./component/FormCard";
import Cards from "./component/Cards";
import Data from "./component/Data.json";
import FormCard from "./component/FormCard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: Data,
			filteredData: Data,
		};
	}
	filerData = (e) => {
		let specialistStudent = e.target.value;
		if (specialistStudent) {
			let filterdData = Data.filter((card) => {
				return card.specialist === specialistStudent;
			});
			this.setState({
				filteredData: filterdData,
			});
		}
		if (e.target.value === "all") {
			let filterdData = Data.filter((card) => {
				return card;
			});
			this.setState({
				filteredData: filterdData,
			});
		}
	};
	render() {
		return (
			<>
				<Form filerData={this.filerData} />
				<Main filteredData={this.state.filteredData} />
			</>
		);
	}
}

export default App;
