import React, { Component } from "react";
import Cards from "./Cards";
import Data from "./Data.json";

class Main extends Component {
	render() {
		return (
			<div className="row">
				{this.props.filteredData.map((card) => {
					return (
						<Cards
							name={card.name}
							age={card.age}
							specialist={card.specialist}
						/>
					);
				})}
			</div>
		);
	}
}

export default Main;
