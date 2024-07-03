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

function fizzbuzz() {
    let max_number = parseInt(prompt("Up to what number do you want to FizzBuzz? ", "0"), 10);
    while (Number.isNaN(max_number) || max_number < 1) {
        max_number = parseInt(prompt("Sorry, I did not get that. Please enter a positive integer: ", "0"), 10);
    }

    const rule_nums = {
        "three_rule": true, 
        "five_rule": true, 
        "seven_rule": true, 
        "eleven_rule": true,
        "thirteen_rule": true, 
        "seventeen_rule": true
    }

    for (var rule_str in rule_nums) {
        let accept_rule = parseInt(prompt("Do you want to use the " + rule_str + " rule? Insert 0 for no or 1 for yes: ", "0"), 10);
        while (accept_rule != 0 && accept_rule != 1) {
            accept_rule = parseInt(prompt("Sorry, I did not get that. Please enter either 0 or 1: ", "0"), 10);
        }

        if (accept_rule === 0) {
            rule_nums[rule_str] = false;
        }
    }
    console.log(rule_nums);

    const { 
        three_rule, 
        five_rule, 
        seven_rule, 
        eleven_rule, 
        thirteen_rule, 
        seventeen_rule 
    } = rule_nums;

    console.log(three_rule);
    // Now that we have determined the number up to which we want to FizzBuzz and the rules we want to use,
    // we determine the output

    const answer = [];

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
