console.log('In the script.js')

$(document).ready(onReady);

function onReady(){
    console.log('we ready!')
    

    $('.clickMe').click(append);
}

function append(){
    $('body').append(`
    <h2>Here is a new h2</h2>
    `)
}