const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { PORT, DATABASE_URL } = require('./config');
const { BlogPost } = require('./model');

const app = express();
// load morgan for logging
app.use(morgan('common'));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json(Blogposts.get());
});
