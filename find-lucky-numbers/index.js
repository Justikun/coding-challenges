function findLuckyNumbers(numbersToFind) {
    possiblyLuckyNumbers = [1,2,3,4,5,6,7,8,9,10]
    luckyNumbers = []

    for (let i = 0; i < numbersToFind; i++) {
        let randomNumber = Math.floor(possiblyLuckyNumbers.length * Math.random())
        luckyNumbers.push(possiblyLuckyNumbers[randomNumber])
    }
    return luckyNumbers
}

console.log(findLuckyNumbers(10))