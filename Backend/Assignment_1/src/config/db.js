const mongoose = require("mongoose")

async function connectToDB () {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database has been connected")
}

module.exports = connectToDB