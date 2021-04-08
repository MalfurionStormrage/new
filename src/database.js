const mongoose = require('mongoose');

export async function connect() {
	try {
		const db = await mongoose.connect(process.env.DATABASE , {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})
		.then(db => console.log(`database on -> ${db}`));
		return db;
	} catch (err) {
		console.log(err);
	}
}