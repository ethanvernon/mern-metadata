const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this will be our data structure 
var fileSchema = new Schema({    
	name: {
		type:String,
		required: true
	},
	type: {
		type:String,
		required: true
	},
	size: {
		type:Number,
		required:true
	}
});

//export the Schema
module.exports = mongoose.model("Files", fileSchema);