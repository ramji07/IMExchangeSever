import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/dbConnection.js'
import UserRoutes from './Routes/user.routes.js'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT

// middlewares 

app.use(express.json())
app.use(cors())



// user routes
app.use('/api', UserRoutes)


async function connect(){
    try {
        await connectDB();
        app.listen(port, ()=>{
            console.log(`server is Running `)
        })
    } catch (error) {
        console.log(error)
    }
}

connect();


