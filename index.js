const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url);

connect.then((db) => {
	console.log("Connected to server!");
	Dishes.create({ name: "Curd Rice", description: " Simple food" })
		.then((dish) => {
			console.log(dish);
			return Dishes.find({});
		})
		.then((dishes) => {
			console.log(dishes);
			return Dishes.findByIdAndUpdate(dish._id,)
			return Dishes.remove({});
		})
		.then((res) => {
			console.log(res);
			return mongoose.connection.close()

		})
		.catch((err) => {
			console.log(err);
		});
});
