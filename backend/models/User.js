const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment-timezone')

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    role: {
        type: String,
        enum: ['Patient', 'Admin','Doctor'],
        default: 'Patient'
    },
    service: {
        type: String,
        enum: ['Fillings', 'Teeth Cleanings','Crowns','Bridges','Root Canals','Dentures'],
    },
    diagnosis: {
        type: String,
    },
    treatmentPlan: {
        type: String,
    },
})

module.exports = mongoose.model('user', userSchema)











// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const moment = require('moment-timezone')

// const userSchema = new Schema({
//     firstname:{
//         type: String,
//         required: true
//     },
//     lastname: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: Number,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
//     },
//     role: {
//         type: String,
//         enum: ['Patient', 'Admin','Doctor'],
//         default: 'Patient'
//     },

// })

// module.exports = mongoose.model('user', userSchema)