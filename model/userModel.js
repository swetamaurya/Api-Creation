const mongooes = require("mongoose")

// schema model
const userSchema = mongooes.Schema({
    userId:{type: String, required: true},
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true}
})

const User = mongooes.model("User", userSchema)

module.exports = User