const express=require('express')
const connectDB = require('../backend/helpers/ConnectDB')
const config = require('config')
const cors = require('cors')



const app=express()
const PORT = config.get('SERVER_CONFIG.PORT') || 5050

// Connect  DB
connectDB()

//middleware
app.use(cors())
app.use(express.json())

// Define Routs
app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/appointment',require('./routes/AppointmentRoutes'))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})