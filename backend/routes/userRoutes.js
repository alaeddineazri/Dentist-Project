const express=require('express')
const userController = require('../controller/auth.controller')
const userControllers = require('../controller/user.controller')
const {tokenMiddleware} = require('../middlewares/tokenMiddleware')
const validationCheck = require('../middlewares/validationCheck')
const router=express.Router()



//ath
router.post('/register',validationCheck,userController.register)
router.post('/login',userController.login)


//
router.get('/getProfile',tokenMiddleware,userControllers.getUser)
router.get('/getAllUsers',tokenMiddleware,userControllers.getAllUsers)
router.put('/updateUser',tokenMiddleware ,userControllers.updateUser) 
router.put('/updateUserAdmin/:id',tokenMiddleware ,userControllers.updateUserAdmin) 
router.delete('/deleteUser/:id',tokenMiddleware ,userControllers.deleteUser) 



module.exports = router