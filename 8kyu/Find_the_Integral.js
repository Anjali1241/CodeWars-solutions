// Create a
// function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent(the second argument), and divide the coefficient(the first argument) by that new number.

// For example
// for 3 x ^ 2, the integral would be 1 x ^ 3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

//     The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
// 3, 2-- > "1x^3"
// 12, 5-- > "2x^6"
// 20, 1-- > "10x^2"
// 40, 3-- > "10x^4"
// 90, 2-- > "30x^3"

// solution
function integrate(coefficient, exponent) {
    return `${coefficient/(exponent+1)}x^${exponent+1}`
}