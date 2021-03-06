import React, {Component} from "react";
import "./App.css";

export class Description extends Component {

	render() {
		return (
			<div className="description">
				<div className="description-text">
					<h3>User stories:</h3>
					<ol>
						<li>I can submit a form object that includes a file upload.</li>
						<li>The from file input field has the "name" attribute set to "upfile". We rely on this in testing.</li>
						<li>When I submit something, I will receive the file name, type, and size in bytes within the JSON response.</li>
					</ol>
					<h3>Usage:</h3>
					<p>Please upload a file...</p>
				</div>
			</div>
		);
	}
}