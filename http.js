const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const shortid = require('shortid');

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Jet Fuel';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
