const mongoose = require('mongoose');
require('dotenv').config()
const mongoURL = process.env.MONGO_URL

async function dbConnect() {
    mongoose.connection.on('connected', ()=>console.log('db is connected!'));
    await mongoose.connect(mongoURL, {
        dbName: 'twitterdb'
    })
}
module.exports = dbConnect