// import functions and grab DOM elements
const skateButton = document.getElementById('skate-button');
const skateResults = document.getElementById('skate-results');
// initialize state

skateButton.addEventListener('click', () => {
    alert('School time skaters');
    const confirmQuiz = prompt('Wanna get schooled?');
if (!confirmQuiz) return;

if (confirmQuiz.charAt(0).toUpperCase() === 'Y'){
    let youRock = 0;
    const firstName = prompt("What's your first name, friend?");
    const lastName = prompt("Sweet, what's your last name?");
    const userShreds = prompt('Do you shred?');

    if(userShreds) { 
    youRock ++;
    const canOllie = prompt('Can you do a Flippie?');
    }
    if(canOllie) {
    youRock ++;
    const miniRamp = prompt('Got a mini ramp?');
    }
    if(miniRamp) {
    youRock ++;
    const miniRamp = prompt(youRock);
    }
    
}
});

// set event listeners to update state and DOM