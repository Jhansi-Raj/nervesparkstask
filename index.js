const express = require('express')
const {connectDB} = require('./db')
const userRoutes = require('./routes/userroute.js')
const app = express()
const PORT = 3000

app.use(express.json())

connectDB()

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
