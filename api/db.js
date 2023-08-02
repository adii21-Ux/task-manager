// db.js
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

const connect=()=>{
    mongoose.connect("mongodb+srv://aditya123:aditya%40123@cluster0.lva2rw6.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = connect
