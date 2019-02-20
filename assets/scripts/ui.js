'use strict'
const store = require('./store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in')
  store.user = responseData.user
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#userOne').html(store.user.email)
  $('#sign-out-form').show()
  $('#userOne').css('color', 'red')
  $('#get-games-form').show()
  $('#new-game-form').show()
  $('#change-password-form').show()
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign in')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error: Password change failure')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out')
  $('form').trigger('reset')
  store.user = null
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-out-form').hide()
  $('#get-games-form').hide()
  $('#new-game-form').hide()
  $('#change-password-form').hide()
}

const signOutFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error signing out')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-message').show()
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
  $('.container').hide()
}

const newGameSuccess = (responseData) => {
  $('#user-message').show()
  $('#user-message').text('New Game Successful!')
  $('form').trigger('reset')
  store.gameId = responseData.game.id
  $('.container').show()
}

const newGameFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error initiating New Game')
}

const getGamesSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Total Wins for ' + store.user.email + '!')
  $('.container').hide()
  $('.user').hide()
  $('.winner').hide()
  let winCounter = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].cells.some((element) => element === 'XWins')) {
      winCounter++
    }
  }
  $('#games-list').html(winCounter)
  $('#games-list').show()
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
