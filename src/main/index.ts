import express from 'express'

require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
