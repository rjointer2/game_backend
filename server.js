const express = require('express')
const bcrypt = require('bcrypt')

const saltRounds = 10

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    // store in DB
  })
})

const app = express()

app.listen(3000, () => {console.log('running')})