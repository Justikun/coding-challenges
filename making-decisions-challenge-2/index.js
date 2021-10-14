//Jon wants to go back to WInterfell! He needs a backpack
let backpack = []

//Jon needs supplies and he chooses to bring a sword, shield, and food.
backpack.push("Sword", "Shield", "Food")
// console.log(backpack)

//he quickly realizes he has no space leff! Let's remove his sword
// backpack.shift()
backpack.splice(0,1)

let furCoat = "Fur Coat"
backpack.push(furCoat)

// console.log(backpack)

//Now Jon is cold! He wants to take the coat out. 
backpack.splice(backpack.length-1,1)
// console.log(backpack)

// console.log("Backpack size: " + backpack.length)

backpack.splice(backpack.length, 0, "blanket", "knife", "toothbrush")
// console.log(backpack)


for (let i = 0; i < backpack.length;i++) {
  console.log(backpack[i])
}