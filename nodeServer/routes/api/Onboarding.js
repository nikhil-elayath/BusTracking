//importing the express framework
const express = require('express')
const router = express.Router()
//importing the database to establish the connection
const db = require('../../db-init/dbConn')

router.get('/check-email', async (req, res, next) => {
  try {
    const emailFromUserTable = await db.any(
      `select * from users where email_id='nikhil.elayath13@gmail.com'`
    )
    console.log('emailFromUserTable', emailFromUserTable)
    //checking if that particular email id exists in the user table if not then will check in the drivers table.
    if (emailFromUserTable.length == 0) {
      const emailFromDriverTable = await db.any(
        `select * from drivers where email_id ='nikhil.elayath13@gmail.com'`
      )
      console.log('emailFromDriverTable', emailFromDriverTable)

      if (emailFromDriverTable.length != 0) {
        res.status(200).json({
          status: 200,
          message: 'Driver email recieved',
          isUser: false
        })
      } else {
        //the recieeved id is a new email id
        res.status(200).json({
          status: 200,
          message: 'New user',
          isNewUser: true
        })
      }
    } else {
      //the email id belongs to a user
      res.status(200).json({
        status: 200,
        message: 'Registered User',
        isUser: true
      })
    }
  } catch (err) {
    err = {
      statusCode: 400
    }

    //next is used to handle the error gracefully by express. Whatever is passed to the next it considers
    // as an error and is passed to the middleware function
    next(err)
  }
})

module.exports = router
