import React, {Component} from "react";
import axios from "axios";
import "./App.css";
import {Title} from "./Title";
import {Description} from "./Description";
import {Footer} from "./Footer";
import {CreateFile} from "./CreateFile";
import {ResultPre} from "./ResultPre";

export class Home extends Component {

	//initialize state
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			type: null,
			size: null,
			results: null
		};
		this.formPostData = this.formPostData.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	//whenever the home page form CreateFile.js changes from user input, this function updates state
	handleFormChange(userInput) {
		//make sure file was uploaded to avoid error
		if (userInput) {
			this.setState({
				name: userInput.name,
				type: userInput.type,
				size: userInput.size
			});
			console.log(this.state.size);
			console.log(userInput.size);
		}
	}

	//this takes the 3 states and builds a new metadata object in the database
	//also sets this.state.results for displaying in ResultPre.js
	formPostData() {
		console.log("calling axios.post from react");
		console.log("adding new metadata to database");

		axios.post("/api/new-metadata", {
			name: this.state.name,
			size: this.state.size,
			type: this.state.type
		}).then(data => {
			console.log("metadata saved");
			console.log(data.data);
			this.setState({
				results: JSON.stringify(data.data, null, 1)
			});
		}).catch(err =>{
			console.log(err);
		});
	}

	render() {
		return(
			<div>
				<Title/>
				<Description/>
				<CreateFile
					handleChange = {this.handleFormChange}
					handleClick = {this.formPostData}
				/>
				<ResultPre
					results = {this.state.results}
				/>
				<Footer/>
			</div>
		)
	}
}

export default Home;