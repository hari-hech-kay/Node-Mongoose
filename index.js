const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url);

connect.then((db) => {

	console.log("Connected to server!");

	Dishes.create({ name: "Tomato Rice", description: " Simple food" })
		.then((dish) => {
			console.log(dish);

			return Dishes.findByIdAndUpdate(dish._id, {
				$set: { description: 'Updated simple food' },
			},
				{
					new: true
				})
				.exec();
		}).
		then((dish) => {
			console.log("\nUpdated Dish\n" + dish);
			dish.comments.push({
				rating: 5,
				comment: "I'm delighted by the taste!",
				author: "Hari"
			});
			return dish.save();
		}).
		then((dish) => {
			console.log("\n Comments added!\n" + dish);
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
