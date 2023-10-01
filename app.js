const express = require('express');
const app = express();
const sequelize = require('./util/database');
const Userreview = require('./models/review');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());

const reviewRoutes = require('./routes/review');
app.use('/company', reviewRoutes)


sequelize.sync().then(result =>{
    app.listen(3000);
}).catch(err =>{
    console.log(err);
})