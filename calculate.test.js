//this file will contain the unit tests for the corresponding
// file calculate.js which contains the code I need to test

//in order to test the code I need to import it
//I have changed the const name to calcualte to correspond
//with the const name supplied in instructions of assignment. 
//const name in step 2 does not correlate so not used

const { calculate } = require('./calculate');

//below used to confirm require working 
// console.log(calculate);

//write a test for adding 2 numbers and validate the expected result

//declare a & b

const a = 6;
const b = 5;


describe ("Unit tests for checking summation function", () => 
        it("should return 11", () => {
        sumIn = calculate.sum(a,b);
        expect(sumIn).toBe(11);
}),

        it("should return 1", () => {
        subIn = calculate.subtract(a,b);
        expect(subIn).toBe(1);
}),

        it("should return 30", () => {
        timesIn = calculate.subtract(a,b);
        expect(timesIn).toBe(30);
}));

//npm run test successful after several errors. 
//Note: sumIn = sum(a,b); did not work (calculate.sum works)




  
//     it("should return false", () => {
//        finalIn = calculate.sum(a,'b');
//        expect(finalIn).toBe(false);
// });


