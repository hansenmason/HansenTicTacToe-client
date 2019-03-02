I used the following technologies:
html, css, javascript, jquery, ajax

Planning and Development Process:
I planned to do the signin/up/out and password features first, and then work on the board and all of it's logic, and then work on api requests. Initially I had followed suit, such that I had done the user signin features, and then moved onto the board. I then took aim at the logic. Upon completion of the logic, or basic layout of the logic, I moved on at random, departing from my plan, to the new game button, to user css/html, back to the board to add features such as winner and resetting etc. When stuck on a problem, I used repl.it to work out logic solutions and then implement them into the game, for example to decide the winner, looping through an object containing multiple arrays, and finally comparing it to the current board. From there, I moved on to api which gave me great difficulty understanding the concept, storing the data, and where the data is stored. What also helped me with the execution process and how to find what I was looking for and where to find it was through collaboration with some of my peers. I also used google to help understand the process of api requests. Once I had the api where I wanted it to be, for the most part, I did not have too many issues I couldn't overcome other than the end where I would have it say "draw" if a player won on the last square. I used debugger to understand what was happening in my for loop, and thus used break to break out of it, as I didn't realize it was not doing, but rather would enter the if statement, exit out of it once finished, and then continue looping (which I did not want). 

Unsolved Problems:
Finally, the last feature of adding the total wins by a user became a very weird and intricate problem. I had the logic part of it, but the interface would change the update request after the game had completed. I used the console and the network features to look for the problem. The site keeps sending option pre-requests that updates the gameboard to something different, but only happens sometimes. Very difficult to overcome. This would be the main unsolved problem for future iterations. I have problem solved through it, but can't find anyway to shut off the options pre requests without potentially doing some serious damage, or out of bounds things to my code. Hopefully this can be fixed in the future. I was unable to complete the undo a move, as was explained that it might be too difficult for now, but something I could come back to in the future, as well as choosing if I'm X or O.



My user stories from the beginning were as follows: 

'As a first time user, I want to be able to have my own unique log in'; 
'As a logged in user, I want to choose if I'm X or O.'; 
'As a logged in user, I want to be able to choose a new game whenever I please.'; 
'As a logged in user, I want to be able to sign out and have my email and password cleared.'; 
'As a logged in user, I want to undo a move.'; 
'As a logger in user, I want to be able to see when a winner is declared.'; 
'As a user, I only want to see the board when I'm logged into the game.'; 
'As a user, I want to see my total wins count.'; 



Link to wireframe: https://imgur.com/a/AHSMWYH
