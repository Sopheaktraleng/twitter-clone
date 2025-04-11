const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

async function dbConnect() {
    mongoose.connection.on("connected", () => console.log("db is connected!"));
    await mongoose.connect(mongoURI, {
        dbName: "twitterdb",
    });
}
module.exports = dbConnect;
