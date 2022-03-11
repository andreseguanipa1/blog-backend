const express = require('express');
const app = express();
const db = require('./src/database/controller/index');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', require('./src/router'));

app.listen(process.env.PORT || 5000, db);

