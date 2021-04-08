const mongoose = require('mongoose');
//un caracter  ASCII equivale a 1bytes y 1bytes equivale a 8 bits
const modellerTasks = new mongoose.Schema(
	{
		title:{
			type: String,
			trim: true,
			require: true,
			maxlength: 32,
			unique: true
		},
		description:{
			type:String,
			maxlenght:33,
			trim:true,
			require:true,
		}
	},
	{
		timestamps: true
	}
);


module.exports = mongoose.model("tasks" , modellerTasks);