const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const blogPostSchema = mongoose.Schema({
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)

module.exports = {BlogPost}
