const { Schema, SchemaType, Model, model } = require("mongoose");
const { DATABASE_COLLECTIONS } = require("./database/collections");

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    createdAt: Date
})

const User = model('User', userSchema, DATABASE_COLLECTIONS.Users)


module.exports = {
    User
}