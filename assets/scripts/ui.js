'use strict'
const store = require('./store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in')
  store.user = responseData.user
}

const signInFailure = () => {
  $('#user-message').text('Error on sign in')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = () => {
  $('#user-message').text('Error signing out')
}

const failure = () => {
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
}

const newGameSuccess = () => {
  $('#user-message').text('New Game Successful!')
}
//
const newGameFailure = () => {
  $('#user-message').text('Error initiating New Game')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  failure,
  newGameSuccess,
  newGameFailure
}
