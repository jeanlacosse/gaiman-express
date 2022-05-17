
// import express
const express = require('express');

// express() is a function and returns an app
// create the app
const app = express();

let games = [
    {
        name: 'Minecraft',
        funLevel: 7
    },
    {
        name: 'CoD',
        funLevel: 8.7
    },
];

// client wants to get the games from us
app.get('/games', (req, res) => { /* pass in arrow function, arguments: request, response */
    // code runs when someone asks to get games
    // ie: localhost:5000/games

    console.log('in /games page')
    // send back the games array to client, could send back anything
    res.send(games);
})



// listening for requests
app.listen(5000, () => {
    console.log('network up and listening')
});

// running this will set up a server and the terminal won't take more commands

// share my client side files w/ public (people who request);
app.use(express.static('./server/public/'));