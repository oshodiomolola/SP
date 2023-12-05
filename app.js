const express = require('express');
require("dotenv").config();
const sequelize = require('./config/sequelize')

const PORT = process.env.PORT

const app = express();


sequelize.authenticate()
.then(() => {
console.log("Connection has been established successfully.")
})
.catch((err) =>{
  console.log('Unable to connect to database', err)
})

app.listen(PORT, ()=>{
  console.log(`App listening at http://localhost/${PORT}`)
})