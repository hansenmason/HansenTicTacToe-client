'use strict'
const config = require('./config.js')
const store = require('./store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const newGame = (formData) => {
//   return $.ajax({
//     url: config.apiURL + '/games',
//     method: 'POST',
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut
  // newGame
}
