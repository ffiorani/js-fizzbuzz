// This is our main function

function fizzprint(message, i) {
    if (message.length != 0) {
        console.log(message);
    } else {
        console.log(i);
    }
}

function fizzbuzz() {
    let n = 255;

    for (let i = 1; i <= n; i++) {
        var words = []

        if (i % 3 == 0) {
            words.push("Fizz");
        }

        if (i % 5 == 0) {
            words.push("Buzz");
        }

        if (i % 7 == 0) {
            words.push("Bang");
        }

        if (i % 11 == 0) {
            words = ["Bong"];
        }

        if (i % 13 == 0) {
            if (words.length == 0) {
                words.push("Fezz");
            } else {
                let j = 0;
                while (j < words.length && words[j][0] != 'B') { j++; }
                words.splice(j, 0, "Fezz");
            }
        }

        if (i % 17 == 0) {
            words.reverse();
        }

        let message = words.join("");
        fizzprint(message, i);
    }
}


// Now, we run the main function:
fizzbuzz();

