const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const app = express();
require('dotenv').config();
const courses = require("./routes/courses");

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(bodyParser.json());

app.use("/api/v1/courses", courses);

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
  
}).catch(error => {
    console.error('Error connecting to the database:', error);
});
app.listen(process.env.PORT, () => {
    console.log('Example app listening on port 3000!');
});