//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";
//import your own components
//import { Home } from "./component/home.js";

function SimpleCounter(props) {
	return (
		<div className="card text-center bg-dark text-primary">
			<div className="d-flex  justify-content-center">
				<div className="car-hearder">
					<i className="far fa-clock" />
				</div>
				<div className="display-3">{props.digitFour % 10}</div>
				<div className="display-3">{props.digitThree % 10}</div>
				<div className="display-3">{props.digitTwo % 10}</div>
				<div className="display-3">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

let cont = 0;

setInterval(() => {
	let one = Math.floor(cont / 10);
	let two = Math.floor(cont / 100);
	let three = Math.floor(cont / 1000);
	let four = Math.floor(cont / 10000);

	cont = cont + 1;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 100);
