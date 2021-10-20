
function hasUniqueChars(word) {
    let preivWord = 0
    for (i = 1; i < word.length; i++) {
        console.log(word[preivWord] + " & " + word[i])
        if (word[i] === word[preivWord]) {
            return false
        }
        preivWord++
    }
    return true
}

console.log(hasUniqueChars("steveE"))