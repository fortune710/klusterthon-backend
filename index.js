const express = require("express");
const router = require("./routes/auth");
const { connect } = require("mongoose");
const { DATABASE_NAME } = require("./database/collections");

const uri = "mongodb+srv://fortune710:Fortune2003!@hng-backend-track.ctnbfii.mongodb.net/?retryWrites=true&w=majority";


const server = express()

server.use(express.json());

connect(uri, { dbName: DATABASE_NAME })
server.use("/api", router)

server.listen(3000)