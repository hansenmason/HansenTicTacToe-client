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
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const signInFailure = () => {
  $('#user-message').text('Error on sign in')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password')
}

const changePasswordFailure = () => {
  $('#user-message').text('Error: Password change failure')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
  $('form').trigger('reset')
  store.user = null
  $('#sign-in-form').show()
  $('#sign-up-form').show()
}

const signOutFailure = () => {
  $('#user-message').text('Error signing out')
}

const failure = () => {
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
  $('.container').hide()
}

const newGameSuccess = (responseData) => {
  $('#user-message').text('New Game Successful!')
  store.gameId = responseData.game.id
  $('.container').show()
}

const newGameFailure = () => {
  $('#user-message').text('Error initiating New Game')
}

const getGamesSuccess = (data) => {
  $('#user-message').text('Here is your game list!')
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  failure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  getGamesSuccess
}
