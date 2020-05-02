//importing the express framework
const express = require('express')
const router = express.Router()
//importing the database to establish the connection
const db = require('../../db-init/dbConn')

router.post('/update-driver-location', async (req, res, next) => {
  console.log('called', req.body)
  let driverEmailId = req.body.email
  let longitude = req.body.longitude
  let latitude = req.body.latitude

  try {
    const driverId = await db.any(
      `select driver_id from drivers where email_id='${driverEmailId}'`
    )
    const before = await db.any(`select * from driver_location`)
    console.log('before', before)
    const updateResult = await db.any(
      `update  driver_location set longitude='${longitude}', latitude='${latitude}' where driver_id='${driverId[0].driver_id}'`
    )
    const updatedLocation = await db.any(`select * from driver_location`)
    console.log('updatedLocation', updatedLocation)

    console.log('driver id', driverId[0].driver_id)

    res.status(200).json({
      status: 200,
      data: { latitude: updatedLocation },
      message: 'Driver email recieved'
    })
  } catch (err) {
    console.log(err)
  }
})
router.post('/get-driver-location', async (req, res, next) => {
  console.log('called get', req.body)
  //   console.log('called', req.body)
  let driverEmailId = req.body.email
  //   let longitude = req.body.longitude
  //   let latitude = req.body.latitude

  try {
    const driverId = await db.any(
      `select driver_id from drivers where email_id='${driverEmailId}'`
    )
    console.log(driverId[0].driver_id)
    // const before = await db.any(`select * from driver_location`)
    // console.log('before', before)
    // const updateResult = await db.any(
    //   `update  driver_location set longitude='${longitude}', latitude='${latitude}' where driver_id='${driverId[0].driver_id}'`
    // )
    const driverLocation = await db.any(
      `select * from driver_location where driver_id='${driverId[0].driver_id}' `
    )
    console.log('driverLocation', driverLocation)

    // console.log('driver id', driverId[0].driver_id)

    res.status(200).json({
      status: 200,
      data: {
        latitude: driverLocation[0].latitude,
        longitude: driverLocation[0].longitude
      },
      message: 'Driver email recieved'
    })
  } catch (err) {
    console.log(err)
  }
})
module.exports = router
