const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const cookieParser = require('cookie-parser')
// const { requireAuth, checkUser } = require('./middleware/authMiddleware');
dotenv.config()

const PORT = process.env.PORT
const db = require('./db.js')
const router = require('./routes/index')
db.connect()

// middle ware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(cookieParser())

// cors
app.use(cors())

app.use((req, res , next) =>{
    req.header("Access-Control-Allow-Origin" , "*")
    req.header("Access-Control-Allow-Headers" , "*")
    next()
})

// routes
// app.use(bodyParser.json())
// app.get('*' , checkUser)

app.use("/api" , router)

app.use("/uploads" , express.static(path.join(__dirname,"/../uploads")))
// app.use(express.static(path.join(__dirname,"/../frontend/build")))

// app.get("*" , (req,res) => {
//     try{
//         res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
//         // res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`))

//     }
//     catch(e){
//         res.send("Oops! unexpected error")
//     }
// })

app.listen(process.env.PORT  || PORT , ()=>{
    console.log(`Listening on port no. ${PORT}`)
})
