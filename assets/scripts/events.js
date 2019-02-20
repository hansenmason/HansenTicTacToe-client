'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const gameboard = require('./gameboard.js')

let activePlayer
let ticArray = []
let playing
function begin () {
  playing = true
  ticArray = []
  activePlayer = 1
  $('.container').hide()
  $('.winner').hide()
  $('.user').show()
  $('#userOne').css('color', 'red')
  $('#userTwo').css('color', 'black')
  $('#games-list').hide()
}

begin()

$('#sign-out-form').hide()
$('#get-games-form').hide()
$('#new-game-form').hide()
$('#change-password-form').hide()

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  activePlayer = 1
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
  begin()
}

const onNewGame = () => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
  $('#0').html('Click Me!')
  $('#1').html('Click Me!')
  $('#2').html('Click Me!')
  $('#3').html('Click Me!')
  $('#4').html('Click Me!')
  $('#5').html('Click Me!')
  $('#6').html('Click Me!')
  $('#7').html('Click Me!')
  $('#8').html('Click Me!')
  begin()
}

const onGetGames = () => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

function nextPlayer () {
  if (activePlayer === 1) {
    activePlayer = 2
    $('#userTwo').css('color', 'red')
    $('#userOne').css('color', 'black')
  } else if (activePlayer === 2) {
    activePlayer = 1
    $('#userOne').css('color', 'red')
    $('#userTwo').css('color', 'black')
  }
}

function checkWin (num, val) {
  for (let i = 1; i <= Object.keys(gameboard.threeInARow).length; i++) {
    if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'XXX') {
      api.updateGame(num, val + 'Wins', true)
      $('.winner').html(store.user.email + ' Wins!')
      $('.winner').show()
      $('.user').hide()
      playing = false
    } else if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'OOO') {
      api.updateGame(num, val, true)
      $('.winner').html('User Two Wins!')
      $('.winner').show()
      $('.user').hide()
      playing = false
    } else if (Object.keys(ticArray).length === 9) {
      api.updateGame(num, val, true)
      $('.winner').html('It\'s a Draw!')
      $('.winner').show()
      $('.user').hide()
      playing = false
    }
  }
}

function addInput (num) {
  if (activePlayer === 1) {
    ticArray[num] = 'X'
    checkWin(num, 'X')
  } else {
    ticArray[num] = 'O'
    checkWin(num, 'O')
  }
}

$('.container').on('click', () => $('#user-message').hide())

document.getElementById('0').addEventListener('click', function () {
  if (playing) {
    if ($('#0').html() === 'Click Me!') {
      if (activePlayer === 1) {
        api.updateGame(0, 'X', false)
        addInput(0)
        $('#0').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(0, 'O', false)
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
        api.updateGame(1, 'X', false)
        addInput(1)
        $('#1').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(1, 'O', false)
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
        api.updateGame(2, 'X', false)
        addInput(2)
        $('#2').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(2, 'O', false)
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
        api.updateGame(3, 'X', false)
        addInput(3)
        $('#3').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(3, 'O', false)
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
        api.updateGame(4, 'X', false)
        addInput(4)
        $('#4').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(4, 'O', false)
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
        api.updateGame(5, 'X', false)
        addInput(5)
        $('#5').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(5, 'O', false)
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
        api.updateGame(6, 'X', false)
        addInput(6)
        $('#6').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(6, 'O', false)
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
        api.updateGame(7, 'X', false)
        addInput(7)
        $('#7').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(7, 'O', false)
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
        api.updateGame(8, 'X', false)
        addInput(8)
        $('#8').html('X')
        nextPlayer()
      } else if (activePlayer === 2) {
        api.updateGame(8, 'O', false)
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
  onNewGame,
  onChangePassword,
  onGetGames
}
