const Influx = require('influx');

//confifurasi influx
/********************************************************* */
const client = new Influx.InfluxDB({
  database: 'modbuspoll',
  host: process.env.HOST,
  port: 8086,
  username: process.env.UNAME,
  password: process.env.PASSWORD,
})
/********************************************************* */


//insert data modbus//
/********************************************************* */
const modbusString  = require('./prosesInfluxDB');
let InsertModbus = async()=>{
  try {
    const rows = [{
        measurement:'valueModbus',
        fields: {value:modbusString},
      }]
    await client.writePoints(rows);
    console.log('Data stored successfully!');
  } catch (err) {
    console.log(`Error while processing ${err}`);
  }
};
/********************************************************* */


//update value modbuss//
/********************************************************* */
let InsertValue = async (measurement, value) => {
  downtime = value.downtime 
  runtime = value.runtime 
  idletime = value.idletime
  status = value.status
  try {
    const rows = [{
        measurement,
        fields: {status, runtime, downtime, idletime},
      }];
   
    await client.writePoints(rows);
    // return await client.writePoints(rows);
    console.log('Data stored successfully!');
  } catch (err) {
    console.log(`Error while processing ${err}`);
  }
};
// InsertValue('APIvalue',{downtime:0,runtime:0,idletime:0,status:'stop'})
/********************************************************* */


//select last value//
/********************************************************* */
let selectall = async (measurement) => {
  try{
      const results = await client.query(
          `select last(*) from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by date//
/********************************************************* */
let selectDate = async (measurement) => {
  try{
      const results = await client.query(
          `select * from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by week//
/********************************************************* */
let selectWeek= async (measurement) => {
  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time > now() - 7d`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by month//
/********************************************************* */
let selectOneMonth= async (measurement) => {
  var newDate = new Date();
  
  var month = newDate.getMonth() + 1;
  month = month.toString()
  if (month.length===1){
      month='0'+month
  }

  var year = newDate.getFullYear();

  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time >= '${year}-${month}-01'`);
      return results;
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by 3month//
/********************************************************* */
let selectThreeMonth= async (measurement) => {
  var newDate = new Date();

  var date = newDate.getDate();
  date = date.toString()

  var month = newDate.getMonth() + 1;
  month = month.toString()
  if (month.length===1){
    month='0'+month
  }

  var months = newDate.getMonth() + 3;
  months = months.toString()
  if (months.length===1){
    months='0'+months
  }
  
  var year = newDate.getFullYear();

  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time >= '${year}-${month}-${date}' and time <= '${year}-${months}-${date}'`);
      return results;
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by year//
/********************************************************* */
let selectYear= async (measurement) => {
  var newdate = new Date();

  var year = newdate.getFullYear();

  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time >= '${year}-01-01' and time <= '${year}-12-31'`);
      return results;
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */



//get function//
/********************************************************* */
const influx = {
  selectall,InsertModbus,InsertValue,selectDate,selectWeek,selectOneMonth,selectYear,selectThreeMonth
}
/********************************************************* */

module.exports=influx