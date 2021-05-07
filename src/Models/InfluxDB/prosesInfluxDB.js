const modbus = require('../Modbus/Modbusconfig')
const modbusString = modbus()[0]
const stringDataModbus = JSON.stringify(modbusString)

module.exports = stringDataModbus;
