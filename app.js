// // Find the Largest Number in the Array
// // Write a JavaScript conditional statement to find the largest of the five numbers from the array below. Use an alert box to show the result.

// const myNumberList = [12, 2112, 9000, 1999, 24];

// // loop through the array and check to see if its biiger than the last number

// let checker = 0;

// for(let i = 0 ; i < myNumberList.length; i++){

// //check to see if the last index position's value is larger than the current largest saved number
// if
// (myNumberList[i]>checker)
// {
//     checker = myNumberList[i];
// }

// }
// console.log(checker);

// Exercise 1: While/For Loops
// Create an empty name_array
// Ask the user Enter a word. Enter 'q' to quit. Add each word they enter to the array
// Create a while loop that will keep asking for words to add to the array until they enter 'q'
// When the user enters 'q' use a for loop to print each word from the array
// NOTE: Your code should handle the case of the entered quite letter Q

// let nameArray = []
// let notDoneEntering = true;
// while(notDoneEntering){
//    let names = prompt('enter a name or enter q to quit');
// if(names === 'q'){
//     let div = document.getElementById('jsStuff');
//     let p = document.createElement('p');
//     let namesTxt = document.createTextNode(nameArray)
//     p.appendChild(namesTxt);
//     div.appendChild(p)
// notDoneEntering = false;
// }else{
//     nameArray.push(names);

// }
// }
// console.log(nameArray);

// FIZZBUZZ is a classic Programmer's challenge often used as part of job interviews.

// User inputs the ending value (e.g. 100)

// Your code should start at 1 and then iterate each number up to the maximum
// If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// // Otherwise, just print the number to the console

// let endStr = prompt("give me a number form 20 - 100");
// let endNum = parseFloat(endStr);
// for (let start = 1; start < endNum; start++) {
//   if (start % 3 === 0 && start % 5 === 0) {
//     console.log("fizz buzz");
//   } else {
//     if (start % 5 === 0) {
//       console.log("buzz");
//     } else if (start % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(start);
//     }
//   }
// }

// get the jsStuff
//get the jsStuff

// let div = document.getElementById('jsStuff');

// let image = document.createElement('img');

// // update the image source
// let i = 1;
// setInterval(()=>{
//     if (i <9){
//         i++;
//         imgSrc= `./guy${i}.png`;
//         image.src = imgSrc;
//         console.log(imgSrc);
//        div.appendChild(image);

//     }else{
//        i = 0;
//     }

// },100);

// let password = 'ROBERTISAWESOME';

// let notRight = true;

// while(notRight){
//     let x = prompt('please enter the password').toUpperCase();
//     if (x !== password) {
//         console.log(x);
//         alert('that is incorrect')
//     } else {
//         alert('welcome robert');
//         notRight = false;
//     }
// }
