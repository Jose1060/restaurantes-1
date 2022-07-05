const { connect } = require("mongoose");

const connectDB = async () => {
	try {
		console.log("Connecting to database... 🚀");
		await connect(process.env.MONGO_URI);
		console.log("Connected to database 😸🎉");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;

