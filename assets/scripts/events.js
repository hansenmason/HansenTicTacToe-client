'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onNewGame = () => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onFlipIt = () => {
  event.preventDefault()
  console.log('you did it!')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onFlipIt
}
