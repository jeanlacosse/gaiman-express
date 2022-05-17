
// import express
const express = require('express');

// express() is a function and returns an app
// create the app
const app = express();

// listening for requests
app.listen(5000, () => {
    console.log('network up and listening')
});

// running this will set up a server and the terminal won't take more commands

// share my client side files w/ public (people who request);
app.use(express.static('./server/public/'));