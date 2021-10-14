
// for (let i = 1; i < 51; i++) {
//   if (i % 3 === 0) {
//     if (i % 5 === 0) {
//     console.log("FizzBuzz")
//     continue;
//     }
//     console.log("Fizz")
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
}

// for (let i=1;i<51;i++) {
//   if (i % 3 === 0 && i % 5 == 0) {
//     console.log("FizzBuzz")
//   } else if (i % 3 === 0) {
//     console.log("Fizz")
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }

//Jeddys Solution
for (let i=1;i<51;i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}