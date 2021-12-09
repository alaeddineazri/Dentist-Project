const jwt =require('jsonwebtoken')
const config =require('config')
const Appointment = require('../models/Appointment')


const tokenMiddleware = async (req,res,next)=>{
    try { const token = req.header('auth-token')
        if(!token)
        res.status(401).json({errors:[{msg:'Sorry your request could not be processed'}]})
        const payload = await jwt.verify(token,config.get('JWT_CONFIG.SECRET'))
        req.userId=payload.userId
        req.firstname=payload.firstname
        req.lastname=payload.lastname
        next()

    } catch (err) {
        res.status(401).json({ errors: [{ msg: err.message }] })
    }
}




const checkAPPOwner = async (req, res, next) => {
    try {
        const appointment = await Appointment.findOne({ _id: req.params.id, owner: req.userId })
        if (!appointment)
            return res.status(401).json({ err: 'not authorized !' })
        next()
    }
    catch (err) {
        return res.status(401).json({ err: err })
    }
}



module.exports = { tokenMiddleware, checkAPPOwner }
