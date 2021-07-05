// Exercise 1

// let user = {
//     name: "John",
//     years: 30,
//     isAdmin : false
//   }

// let {name,years,isAdmin} = user
// console.log(name,years,isAdmin)



// Exercise 2
// Give the right name:

// 1.Create the variable with the name of our planet. How would you name such a variable?

// let planet='World';

// // 2.Create the variable to store the name of the current visitor. How would you name that variable?

// let visitorName = 'Ahmed';



// Exercise 3
// Look at the code. What will be result of the call at the last line and why?

// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi()

// Answer: it will make an alert in the browser with Hello John because sayHi is assiged as a function with 2 variables phrase and user 



// Exercise 4
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// var user ={
//     name : 'John',
//     surname : 'Smoth'
// };
//  user.name = 'Pete'
//  console.log(user.name)

//  user.name=''
//  console.log(user.name)


// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?

// const user = {
//   name: "John"
// }

// // does it work?
// user.name = "Pete"

/* Answer: Yes, as the constant one is the whole object so we cannot 
write user ={} with new values but the items inside this object are still variables. */


// Exercise 6
// We have an object storing salaries of our team:
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.


// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }

// if(Object.keys(salaries).length === 0){
//     let sum=0
//     console.log('sum =', sum)
// } else{
//     let sum=(a,b,c) => {
//         console.log('sum=',a+b+c)
//     }
//     let {Fred,Ted,Ghaith}=salaries
//     sum(Fred,Ted,Ghaith) 
// }


// Object.keys(salaries).length === 0 ? console.log('sum =0')
// : let sum=(a,b,c) => {
//         console.log('sum=',a+b+c)
//     }
//     let {Fred,Ted,Ghaith}=salaries
//     sum(Fred,Ted,Ghaith)    ////// Didn't work /////



// Exercise 7
// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// Ans: 
// a + b < 4 ?  result = 'Below'
//             : result = 'Over'




// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.


// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// Ans:
// login == 'Employee' ? message = 'Hello'
//         : login == 'Director' ? message = 'Greetings'
//         :login == '' ? message = 'No login'
//         : message = ''