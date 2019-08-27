import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Api from './Api'

const App = express()
const Port = 8080
const urlPrefix ='/api/v1'
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: false }))
App.use(morgan('dev'))
App.use(`${urlPrefix}/users`, Api)
// making connection to mongoes
mongoose.connect('mongodb://localhost:27017/globomantics', {
  useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection: error to the mongodb'))
db.once('open', () => {
  console.log(`connected to mongo db `)
  App.listen(Port, () => {
    console.log(`listening at port http://localhost:${Port}`)
  })
})
App.get('/', (req,res)=>{
    return res.status(200).json({
        'message':'loading the home'
    })
})
