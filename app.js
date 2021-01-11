// import functions and grab DOM elements
const skateButton = document.getElementById('skate-button');
const skateResults = document.getElementById('skate-results');
// initialize state

skateButton.addEventListener('click', function(){
    const firstName = prompt("What's your first name, friend?");
    const lastName = prompt("Sweet, what's your last name?");
    const userShreds = prompt('Do you shred?');

    if (userShreds.charAt(0).toUpperCase() === 'Y'){
       console.log('You rock!');
    } else{
        console.log('You suck, kinda');
    }
    return;
    

});
    
  

// set event listeners to update state and DOM