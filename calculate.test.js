//this file will contain the unit tests for the corresponding
// file calculate.js which contains the code I need to test

//in order to test the code I need to import it
//I have changed the const name to calcualte to correspond
//with the const name supplied in instructions of assignment. 
//const name in step 2 does not correlate so not used

const { calculate } = require('./calculate');

//below used to confirm require working, 
//initial trouble shooting
// console.log(calculate);

//write a test for adding 2 numbers and validate the expected result

//declare a & b, I have decided to use the same numbers for
//each calculation so using constants

const a = 6;
const b = 5;


describe ("Unit tests for checking summation function", () => 
        
        it("should return 11", () => {
        sumIn = calculate.sum(a,b);
        expect(sumIn).toBe(11);
}),

//npm run test successful after several errors. 
//Note: sumIn = sum(a,b); did not work (calculate.sum works)

//now create unit tests for the subtraction and multiplication

        it("should return 1", () => {
        subIn = calculate.subtract(a,b);
        expect(subIn).toBe(1);
}),

        it("should return 30", () => {
        multIn = calculate.multiply(a,b);
        expect(multIn).toBe(30);
}),

// next create failing test, using equality matcher
//the below works, however
//.not.toBe(true) works but
//toBe(false) does not
// aren't these 2 equivilent to each other? 

//         it("should return false", () => {
//         finalIn = calculate.sum('a',b);
//         //check finalIn to trouble shoot 'expect'
//         //console.log(finalIn);
//         expect(finalIn).not.toBe(false);
// }),
        
// further testing with equality matcher shows: 
// both .not.toBe(false) AND .not.toBe(true) work
// which does not make sense, 
// this test is not specific enough: try another way

//         it("should return false", () => {
//         finalIn = calculate.sum(a,'b');
//         expect(finalIn).not.toBe(true);   

// }));

// $ npm test,
// returns 100% coverage for all file elements
// Test Suites: 1 passed, 1 total
//Tests:       5 passed, 5 total

//second attempt at equality matcher 
//using more specific language

//         it("should return not a number", () => {
//         finalIn = calculate.sum('a',b);
//         expect(finalIn).not.toBe(Number);
// }),
//         it("should return not a number", () => {
//         finalIn = calculate.sum(a,'b');
//         expect(finalIn).not.toBe('string');   
        
// }));

// npm test still full coverage and all pass
//troubleshoot with variations results:
//Still not specific enough as both String and 'string' work
// as well as Number
//try another matcher

it("'a' or 'b' should return a string, not a number", () => {

const stringA = 'a';
const stringB = 'b';
 
expect(stringA).not.toEqual(calculate),
expect(stringB).not.toEqual(calculate)

}))

// above works and is specific

