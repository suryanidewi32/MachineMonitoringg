// var ModbusRTU = require("modbus-serial");
// var client = new ModbusRTU();
// const address = 0;
// const quantity = 2;
// const serialport = "COM7"
 
// // open connection to a serial port
// client.connectRTUBuffered(serialport, { baudRate: 9600 });
// client.setID(1);
 
// // read the values of 10 registers starting at address 0
// // on device number 1. and log the values to the console.
// setInterval(function modbus() {
//     client.readHoldingRegisters(address, quantity, function(error,data) {
//     //    console (data.data);
//     const data = (data.data);
//     return data;
//     });
// }, 1000);
// module.exports = modbus;

function modbus() {
    const data = [110,11];
   
    return data;
    
}


module.exports = modbus;

