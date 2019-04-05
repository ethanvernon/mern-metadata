import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


export class ResultPre extends Component {

	//a text-box on the home page which renders formatted JSON whenever
	//a post request is made

	render() {
		return (
			<div className="result-container">
				<pre id="result-output">
					{this.props.results}
				</pre>
			</div>
		);
	}
}