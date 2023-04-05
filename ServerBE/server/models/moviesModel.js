const mongoose = require('mongoose')


const moviesSchema = new mongoose.Schema({
    userId:{type: String, required:true},
    movieId:{type: String, required:true, unique:true},
    poster_path:{type: String, required:true},
    title:{type: String, required:true},
    release_date:{type: String, required:true}

},

{collection: 'movies'}
)
const Movie = mongoose.model('MovieData', moviesSchema)

module.exports = Movie

