const mongoose = require('mongoose')

const Schema = mongoose.Schema


const restaurantSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    tags: {type: [String]},
    reviews: {type: Number, required: true},
    img: {type: String, required: true},
    outdoor: {type: Boolean, default: false},
    takeout: {type: Boolean, default: false}
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant