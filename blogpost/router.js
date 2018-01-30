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

app.get('/posts', (req, res) => {
  BlogPost
    .find(filters)
    .then(BlogPosts => res.json(
            BlogPosts.map(blogpost => blogpost.serialize())
    ))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
// can also request by ID
app.get('/posts/:id', (req, res) => {
  BlogPost
    // this is a convenience method Mongoose provides for searching
    // by the object _id property
    .findById(req.params.id)
    .then(blogpost => res.json(blogpost.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
