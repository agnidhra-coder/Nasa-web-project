const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/nasa-website")

connect.then(() => {
    console.log("Database connected")
})
.catch(() => {
    console.log("Database cannot be connected")
})

const loginSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("users", loginSchema)

module.exports = collection