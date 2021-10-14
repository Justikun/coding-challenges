// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

const myArray = [1, 4, 11, 2, 37, -4]
let smallestNum = myArray[0]
let largestNum = myArray[0]

for (i in myArray) {
  if (myArray[i] < smallestNum) {
    smallestNum = myArray[i]

  }

  if (myArray[i] > largestNum) {
    largestNum = myArray[i]
  }
}


console.log("Largest Number: ", largestNum)
console.log("Smallest Number: ", smallestNum)