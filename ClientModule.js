const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email:String,
    password:String
})
const ClientModel = mongoose.model("clients",ClientSchema)
module.exports = ClientModel