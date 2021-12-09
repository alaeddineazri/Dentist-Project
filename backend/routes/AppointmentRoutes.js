const express=require('express')
const AppointmentController = require('../controller/AppointmentController')
const { tokenMiddleware } = require('../middlewares/tokenMiddleware')
const router=express.Router()




router.post('/add',tokenMiddleware,AppointmentController.addApp)  
router.get('/allAppointment',tokenMiddleware,AppointmentController.getAllApp)  
router.get('/getApp',tokenMiddleware,AppointmentController.getApp)
router.put('/updateAppointment/:id',tokenMiddleware,AppointmentController.updateApp)  
router.delete('/deleteAppointment/:id',tokenMiddleware,AppointmentController.deleteApp)  


module.exports = router