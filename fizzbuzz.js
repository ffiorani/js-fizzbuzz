// This is our main function
function fizzbuzz() {
    let n = 100;

    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            if (i % 3 == 0) {
                console.log("FizzBuzz!");
            } else {
                console.log("Buzz");
            }
        } else if (i % 3 == 0) {
            console.log("Fizz");
        }
    }
}

// Now, we run the main function:
fizzbuzz();

