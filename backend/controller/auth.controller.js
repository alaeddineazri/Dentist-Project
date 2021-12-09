
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')




// auth

const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { firstname, lastname, age, phone, email, password, } = req.body
        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ errors: [{ msg: 'User already existed' }] })
        const newUser = new User({
            firstname,
            lastname,
            age,
            phone,
            email,
            password,

        })
        //!hash a password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        newUser.password = hash
        const registeredUser = await newUser.save()
        const payload = {
            userId: registeredUser._id,
            firstname: registeredUser.firstname,
            lastname: registeredUser.lastname
        }
        const token = await jwt.sign(payload, config.get("JWT_CONFIG.SECRET"))
        res.json({ token })
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}



const login = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ errors: [{ msg: "Couldn't find your account" }] })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(404).json({ errors: [{ msg: 'Wrong password.Try again' }] })
        const payload = {
            userId: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
        }
        const token = await jwt.sign(payload, config.get("JWT_CONFIG.SECRET"))
        res.json({ token })
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })

    }
}








module.exports = { register, login }







