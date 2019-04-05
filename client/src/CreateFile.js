import React, {Component} from "react";
import {Button, FormGroup, Input} from "reactstrap";
import "./App.css";

export class CreateFile extends Component {

	//a form input which sends the file object to Home.js and calls Home.js' formPostData() on click

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange(e) {
		this.props.handleChange(e.target.files[0]);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}
	
	render() {
		return (
			<div className="search-container">
				<FormGroup className="new-user-form">
					<Input type="file" id="upfile" name="upfile" onChange={e => this.handleChange(e)}/>					
					<Button color="primary" onClick={this.handleClick}>Upload</Button>
				</FormGroup>
			</div>	
		);
	}
}