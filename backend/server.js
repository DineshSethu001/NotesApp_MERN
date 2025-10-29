import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// connecting Backend
connectDB()

app.get('/',(req, res)=>(
    res.status(200)
))

app.listen(port,(req, res)=>(
    console.log(`Port is successfully running on http://localhost/${port}`)
))

