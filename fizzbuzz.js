// This is our main function
const findArray = require('lodash');

const prompt = require('prompt-sync')();

function fizzprint(message, i) {
    if (message.length != 0) {
        console.log(message);
    } else {
        console.log(i);
    }
}

function fizzbuzz(three_rule = true, five_rule = true, seven_rule = true, eleven_rule = true, thirteen_rule = true, seventeen_rule = true) {
    let max_number = parseInt(prompt("Up to what number do you want to FizzBuzz? ", "0"), 10);
    while (Number.isNaN(max_number) || max_number < 1) {
        max_number = parseInt(prompt("Sorry, I did not get that. Please enter a positive integer: ", "0"), 10);
    }

    var answer = [];

    for (let i = 1; i <= max_number; i++) {
        var words = []

        if (three_rule && i % 3 === 0) {
            words.push("Fizz");
        }

        if (five_rule && i % 5 === 0) {
            words.push("Buzz");
        }

        if (seven_rule && i % 7 === 0) {
            words.push("Bang");
        }

        if (eleven_rule && i % 11 === 0) {
            words = ["Bong"];
        }

        if (thirteen_rule && i % 13 === 0) {
            if (words.length === 0) {
                words.push("Fezz");
            } else {
                let idx_first_word_starting_with_B = findArray(words, 'B')
                words.splice(idx_first_word_starting_with_B, 0, "Fezz");
            }
        }

        if (seventeen_rule && i % 17 === 0) {
            words.reverse();
        }

        let message = words.join("");
        if (message.length === 0) {
            answer.push(i);
        } else {
            answer.push(message);
        }
        fizzprint(message, i);
    }

    return answer;
}

// Now, we run the main function:
fizzbuzz();
