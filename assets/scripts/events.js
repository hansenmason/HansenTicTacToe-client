'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gameboard = require('./gameboard.js')

let activePlayer
const ticArray = []

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
  activePlayer = 1
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

function nextPlayer () {
  activePlayer === 1 ? activePlayer = 2 : activePlayer = 1
}

function addInput (num) {
  if (activePlayer === 1) {
    ticArray[num] = 'X'
    for (let i = 1; i <= Object.keys(gameboard.threeInARow).length; i++) {
      if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'XXX') {
        console.log('Winner!')
      }
    }
  } else {
    ticArray[num] = 'O'
    for (let i = 1; i <= Object.keys(gameboard.threeInARow).length; i++) {
      if (ticArray[gameboard.threeInARow[i][0]] + ticArray[gameboard.threeInARow[i][1]] + ticArray[gameboard.threeInARow[i][2]] === 'OOO') {
        console.log('Winner!')
      }
    }
  }
}

document.getElementById('0').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(0)
    $('#0').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(0)
    $('#0').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer(0)
  }
})

document.getElementById('1').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(1)
    $('#1').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(1)
    $('#1').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('2').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(2)
    $('#2').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(2)
    $('#2').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('3').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(3)
    $('#3').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(3)
    $('#3').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('4').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(4)
    $('#4').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(4)
    $('#4').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('5').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(5)
    $('#5').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(5)
    $('#5').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('6').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(6)
    $('#6').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(6)
    $('#6').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('7').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(7)
    $('#7').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
  } else {
    addInput(7)
    $('#7').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
  }
})

document.getElementById('8').addEventListener('click', function () {
  if (activePlayer === 1) {
    addInput(8)
    $('#8').replaceWith('<div class="col-4 box">X</div>')
    nextPlayer()
    console.log(ticArray)
  } else {
    addInput(8)
    $('#8').replaceWith('<div class="col-4 box">O</div>')
    nextPlayer()
    console.log(ticArray)
  }
})

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame
}

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// $('#1').replaceWith('<div class="col-4 box">X</div>')
// $('#2').replaceWith('<div class="col-4 box">X</div>')

// for (let i = 0; i < array.length; i++) {
//   if (document.getElementById(array[0]).getAttribute('id') === '1') {
//     // console.log(document.getElementById(array[i]).getAttribute('id'))
//     // }
//     // const x = document.getElementById(array[1]).getAttribute('id')
//     // console.log(x)
//     // console.log(document.getElementById(array[i]))
//     console.log('you did it!')
//   }
// }
