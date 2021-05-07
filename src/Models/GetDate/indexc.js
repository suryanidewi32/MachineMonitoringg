

const GetDay = require('./getDay')

    const getDay =  GetDay()
    let array = getDay.map(obj => Object.values(obj))
    console.log(array)
  