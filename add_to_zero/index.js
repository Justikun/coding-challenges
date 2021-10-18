// const myArray = [1, 4, 11, 2, 37, -4]
// const myArray = [0, 21, 33, 6, 0, -9]
const myArray = [0, 1, 2, 3, 4, 5]


addsToZero = false
for (let i=0;i<myArray.length;i++) {
    for (let j=1;j<myArray.length;j++) {
        if ((myArray[i] + myArray[j]) === 0) {
            addsToZero = true
            console.log(`${myArray[i]} + ${myArray[j]} equals 0`)
            break
        }
    }
    if (addsToZero) {
        break
    }
}
