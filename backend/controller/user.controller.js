
const User = require('../models/User.js')


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select({ password: 0, __v: 0,})

        res.json(user)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find().select({ password: 0, __v: 0 })
        res.json(user)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove({ _id: req.params.id })
        res.json(deletedUser)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }

}


const updateUserAdmin = async (req, res) => {
    try {
        const userUpdated = await User.findByIdAndUpdate({ _id: req.params.id }, 
            {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            phone: req.body.phone,
            email: req.body.email,
            role: req.body.role,
            service: req.body.service,
            diagnosis:req.body.diagnosis,
            treatmentPlan:req.body.treatmentPlan

        })
        res.json(userUpdated)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }

}



const updateUser = async (req, res) => {

    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.userId },
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age,
                    phone: req.body.phone,
                    email: req.body.email,

                },
            },

        )
        res.json(updatedUser)
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] })
    }
};







module.exports = { getUser, getAllUsers, updateUser, deleteUser, updateUserAdmin }