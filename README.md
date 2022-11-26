# clg-nodejs-3
CLG Node JS Lesson 3

* Copy the code provided in to a file and name it calculate.js
        
        const calculate = {
        
        sum: function(a,b) {
            return a + b;
        },
        
        subtract: function(a,b) {
            return a - b;
        },
        
        multiply: function(a,b) {
            return a * b;
        }
        }

        module.exports = calculate;

* Create a test file named calculate.test.js

* Import the calculate file in the test file: cont mathOperations =      require('./calculator)

* Write a test for adding 2 numbers and validate the expected results

* Write a failing test and see what output you get

* Write more test cases: for subtract and multiply

* Observe the test results and coverage from your test cases


