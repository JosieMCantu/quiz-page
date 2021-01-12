// IMPORT MODULES under test here:
import { answerYes } from '../utils.js';

const test = QUnit.test;

test('if user enters y they get true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerYes('y');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if user enters no they get false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerYes('no');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
