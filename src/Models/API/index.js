const express = require('express')
const app = express()
const config = require('../Config/index')
const port = config.port


app.listen(port, () => console.log('Server runs on port',port))
const MongoDB = require('../LoginUser/MongoDB')
MongoDB.Server()

/*********************************************************************/
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
/*********************************************************************/
const updateData = require('../InfluxDB/InsertNUpdate')
const allData = require('../InfluxDB/SelectApivalue')
const GetDay = require('../GetDate/getDay')
const GetWeek = require('../GetDate/GetWeek')
const Get1Month = require('../GetDate/get1Month')
const Get3Month = require('../GetDate/Get3Month')
const GetYear = require('../GetDate/GetYear')
/*********************************************************************/

// Data Processing for user
const router = require('../LoginUser/router')
app.use('/',router)


// Data Processing for select last APIvalue;
app.get('/', async(req, res) => {
    const dataModbusSerial = await allData()
    res.status(200).json(dataModbusSerial)
})


// Data Processing for update APIvalue;
updateData()

// Data Processing for get date
app.get('/day', async(req, res) => {
    const getDay = await GetDay()
    res.status(200).json(getDay)
})

app.get('/week', async(req, res) => {
    const getWeek = await GetWeek()
    res.status(200).json(getWeek)
})

app.get('/month', async(req, res) => {
    const getMonth= await Get1Month()
    res.status(200).json(getMonth)
})

app.get('/months', async(req, res) => {
    const getMonths= await Get3Month()
    res.status(200).json(getMonths)
})

app.get('/year', async(req, res) => {
    const getYear= await GetYear()
    res.status(200).json(getYear)
})






