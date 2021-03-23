const mongoose = require('mongoose')
const Schema = mongoose.Schema


const targetSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        enum: ['Jedi', 'Sith'],
        required: true
    }
})

module.exports = mongoose.model('Target', targetSchema)