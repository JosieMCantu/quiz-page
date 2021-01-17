import {answerYes} from './utils.js';
const skateButton = document.getElementById('skate-button');
const skateResults = document.getElementById('skate-results');


skateButton.addEventListener('click', () => {
    alert('School time skaters');
    const confirmQuiz = prompt('Wanna get schooled?');
    if (!confirmQuiz) return;
    if (confirmQuiz.charAt(0).toUpperCase() === 'Y'){
        const firstName = prompt("What's your first name, friend?");
        const lastName = prompt("Sweet, what's your last name?");
        const userShreds = prompt('Do you shred?');
        let correctAnswer = 0;
        if (answerYes(userShreds)) correctAnswer ++;
        const canOllie = prompt('Can you do a Flippie?');
        if (answerYes(canOllie)) correctAnswer ++;
        const miniRamp = prompt('Got a mini ramp?');
        if (!answerYes(miniRamp)) correctAnswer ++;
        const resultsString = `What's up ${firstName} ${lastName}! You got ${correctAnswer} answers right! That means you rock! `;
        skateResults.textContent = resultsString;
        }   
});