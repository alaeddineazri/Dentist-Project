

const Appointment = require('../models/Appointment.js')





const addApp = async (req, res) => {
    try {

        const { dateOfAppointment, timeOfDay } = req.body
        // const appointment = await Appointment.findOne({ userId })
        // console.log("userIduserIduserIduserId",appointment)
        // if (!appointment)
        //     return res.status(400).json({ errors: [{ msg: "ooooo" }] })
        const newAppointment = new Appointment({
            dateOfAppointment,
            timeOfDay,
            firstname: req.firstname,
            lastname: req.lastname,
            userId: req.userId,
            phone: req.phone,
        })
        const savedAppointment = await newAppointment.save()
        res.json(savedAppointment)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }


}

const getAllApp = async (req, res) => {
    try {
        const appointment = await Appointment.find().select({ __v: 0 })
        res.json(appointment)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}

const deleteApp = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndRemove({ _id: req.params.id })
        res.json(deletedAppointment)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }

}


const updateApp = async (req, res) => {
    try {
        const appUpdated = await Appointment.findByIdAndUpdate({ _id: req.params.id },
            {
                dateOfAppointment: req.body.dateOfAppointment,
                timeOfDay: req.body.timeOfDay,
                status: req.body.status
            })
        res.json(appUpdated)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }

}


const getApp = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({ userId: req.userId })
        res.json(appointment)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}



module.exports = { addApp, getAllApp, deleteApp, updateApp, getApp }

