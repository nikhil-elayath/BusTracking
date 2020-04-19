module.exports = (err, req, res, next) => {
  console.log(err.statusCode)
  //if the status coce is passed to the error handling that particular status code will be shown otherwise
  //   the default status code of 500 will be give
  //   if a custom message is provided that will be sent in the reponse
  res.status(err.statusCode ? err.statusCode : 500).send({
    message: err.customMessage ? err.customMessage : 'Something went wrong'
  })
}
