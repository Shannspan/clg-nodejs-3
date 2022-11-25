//this js file will contain the working code snippet 
//this is a variable containing multiple functions
const calculate = {
    sum: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    }};
//using common.js module.export to 'move' variable data
module.exports = { calculate }

//ADOPTING TEST AS YOU CODE APPROACH:
//therefore, next step is to create a corresponding 
//unit test case for this file (eg .spec.js) 
//this assignment has asked for .test.js 
