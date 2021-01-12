// import functions and grab DOM elements
const skateButton = document.getElementById('skate-button');
const skateResults = document.getElementById('skate-results');
// initialize state

skateButton.addEventListener('click', function(){
    alert('School time skaters');
    const confirmQuiz = prompt('Wanna get schooled?')

if (!confirmQuiz) return;
if (confirmQuiz.charAt(0).toUpperCase() === 'Y'){
    const firstName = prompt("What's your first name, friend?");
    const lastName = prompt("Sweet, what's your last name?");
    const userShreds = prompt('Do you shred?');
    
}
    
  

// set event listeners to update state and DOM