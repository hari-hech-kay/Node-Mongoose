const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishShema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true,
	},
	comments: [commentSchema]
}, {
	timestamps: true
});

const commentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		required: true,
		type: String
	},
	author: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

var Dishes = mongoose.model('Dish', dishShema);
module.exports = Dishes;