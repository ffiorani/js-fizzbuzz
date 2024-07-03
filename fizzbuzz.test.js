const fizzbuzz = require('./fizzbuzz.js');

test('FizzBuzz for multiples of 3', () => { 
    expect(fizzbuzz(n=3, three_rule = true)).toContain('Fizz'); 
})
test('FizzBuzz for no multiples of 3', () => {
    expect(fizzbuzz(n=6, three_rule = false)).toStrictEqual([1,2,3,4, 'Buzz', 6]);
})
test('FizzBuzz for multiples of 5', () => { 
    expect(fizzbuzz(n=5, five_rule = true)).toContain('Buzz'); 
})

test('FizzBuzz for no multiples of 5', () => {
    expect(fizzbuzz(n=6, three_rule = true, five_rule = false)).toStrictEqual([1, 2,'Fizz', 4, 5, 'Fizz']);
})

test('FizzBuzz for multiples of 3 and 5', () => { 
    expect(fizzbuzz(n=15)).toContain('FizzBuzz'); 
})
test('FizzBuzz for multiples of 3 and 5 with no three rule', () => { 
    expect(fizzbuzz(n=15, three_rule = false)).toStrictEqual([1,2,3,4,'Buzz',6,'Bang',8,9, 'Buzz', 'Bong',12,'Fezz','Bang', 'Buzz']);
})
test('FizzBuzz for multiples of 7', () => { 
    expect(fizzbuzz(n=7, five_rule = true)).toContain('Bang'); 
})
test('FizzBuzz for no multiples of 3, 5, 7', () => {
    expect(fizzbuzz(n=7, three_rule = false, five_rule = false, seven_rule = false)).toStrictEqual([1,2,3,4,5,6,7]);
})