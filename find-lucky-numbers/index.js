function findLuckyNumbers(numbersToFind) {
    possibleLuckyNumbers = [1,2,3,4,5,6,7,8,9,10]
    luckyNumbers = []

    for (let i = 0; i < numbersToFind; i++) {
        let randomNumber = Math.floor(possibleLuckyNumbers.length * Math.random())
        luckyNumbers.push(possibleLuckyNumbers[randomNumber])
        possibleLuckyNumbers.splice(randomNumber,1)
    }
    return luckyNumbers
}

console.log(findLuckyNumbers(10))