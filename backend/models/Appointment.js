
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AppointmentSchema = new Schema({  
    dateOfAppointment :{
        type: String,  
        required: true
    },
    timeOfDay: {
        type: String,
        enum: ["Morning","Noon","Afternoon"],
        default: "Morning",
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    firstname: {
        type: String,
        ref: 'user'
    },
    lastname: {
        type: String,
        ref: 'user'
    },
    phone: {
        type: Number,
        ref: 'user'
    },
    status: {
        type: Boolean ,
        default: false ,
    }

})

module.exports = mongoose.model('Appointment', AppointmentSchema)













// const mongoose = require('mongoose')
// const Schema = mongoose.Schema


// const AppointmentSchema = new Schema({  
//     dateOfAppointment :{
//         type: Date,
//         required: true
//     },
//     owner: {
//         type: mongoose.Types.ObjectId,
//         ref: 'user'
//     }
    

// })

// module.exports = mongoose.model('Appointment', AppointmentSchema)


