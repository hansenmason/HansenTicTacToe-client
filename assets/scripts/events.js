'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gameboard = require('./gameboard.js')

let activePlayer
let ticArray = []
let playing
begin()

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('.container').show()
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  activePlayer = 1
  $('.container').show()
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
  $('.container').hide()
}

const onNewGame = () => {
  event.preventDefault()
  // api.newGame()
  // .then(ui.newGameSuccess)
  // .catch(ui.failure)
  begin()
  $('#0').html('Click Me!')
  $('#1').html('Click Me!')
  $('#2').html('Click Me!')
  $('#3').html('Click Me!')
  $('#4').html('Click Me!')
  $('#5').html('Click Me!')
  $('#6').html('Click Me!')
  $('#7').html('Click Me!')
  $('#8').html('Click Me!')
}

function nextPlayer () {
  activePlayer === 1 ? activePlayer = 2 : activePlayer = 1
}

function checkWin () {
  for (let i = 1; i <= Object.keys(gameboard.threeInARow).length; i++) {
    if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'XXX') {
      console.log('Winner!')
      playing = false
      $('#winner').html('Player One Wins!')
      $('#winner').show()
    } else if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'OOO') {
      console.log('Winner!')
      playing = false
      $('#winner').html('Player Two Wins!')
      $('#winner').show()
    }
  }
}
function addInput (num) {
  if (activePlayer === 1) {
    ticArray[num] = 'X'
    checkWin()
  } else {
    ticArray[num] = 'O'
    checkWin()
  }
}

document.getElementById('0').addEventListener('click', function () {
  if (playing) {
    if ($('#0').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(0)
        $('#0').html('X')
        nextPlayer()
      } else {
        addInput(0)
        $('#0').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('1').addEventListener('click', function () {
  if (playing) {
    if ($('#1').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(1)
        $('#1').html('X')
        nextPlayer()
      } else {
        addInput(1)
        $('#1').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('2').addEventListener('click', function () {
  if (playing) {
    if ($('#2').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(2)
        $('#2').html('X')
        nextPlayer()
      } else {
        addInput(2)
        $('#2').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('3').addEventListener('click', function () {
  if (playing) {
    if ($('#3').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(3)
        $('#3').html('X')
        nextPlayer()
      } else {
        addInput(3)
        $('#3').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('4').addEventListener('click', function () {
  if (playing) {
    if ($('#4').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(4)
        $('#4').html('X')
        nextPlayer()
      } else {
        addInput(4)
        $('#4').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('5').addEventListener('click', function () {
  if (playing) {
    if ($('#5').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(5)
        $('#5').html('X')
        nextPlayer()
      } else {
        addInput(5)
        $('#5').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('6').addEventListener('click', function () {
  if (playing) {
    if ($('#6').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(6)
        $('#6').html('X')
        nextPlayer()
      } else {
        addInput(6)
        $('#6').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('7').addEventListener('click', function () {
  if (playing) {
    if ($('#7').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(7)
        $('#7').html('X')
        nextPlayer()
      } else {
        addInput(7)
        $('#7').html('O')
        nextPlayer()
      }
    }
  }
})

document.getElementById('8').addEventListener('click', function () {
  if (playing) {
    if ($('#8').html() === 'Click Me!') {
      if (activePlayer === 1) {
        addInput(8)
        $('#8').html('X')
        nextPlayer()
      } else {
        addInput(8)
        $('#8').html('O')
        nextPlayer()
      }
    }
  }
})

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame
}

function begin () {
  playing = true
  // $('.container').hide()
  ticArray = []
  activePlayer = 1
  $('#winner').hide()
}
