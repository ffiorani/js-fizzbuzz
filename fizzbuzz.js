// This is our main function
function fizzbuzz() {
    let n = 105;

    for (let i = 1; i <= n; i++) {
        let message = ""
        if (i % 3 == 0) {
            message += "Fizz";
        }

        if (i % 5 == 0) {
            message += "Buzz";
        }

        if (i % 7 == 0) {
            message += "Bang";
        }

        if (message.length != 0) {
            console.log(message);
        } else {
            console.log(i);
        }
    }
}

// Now, we run the main function:
fizzbuzz();

