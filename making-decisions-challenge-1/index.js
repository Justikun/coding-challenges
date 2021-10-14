//Create variable for Jon and Jaime's attack strenghts
let jonSnowAttack = 25
let jamieLannisterAttack = 34

//Before the battle, Jon and Jamie compare attack levels to get insight to see who will win

// if (jonSnowAttack > jamieLannisterAttack) {
//   console.log("Jon has a batter attack than Jamie")
// } else {
//   console.log("Jamie has a better attack than Jon")
// }

// //What if we have a tie?

// if (jonSnowAttack > jamieLannisterAttack) {
//   console.log("Jon has a batter attack than Jamie")
// } else if (jamieLannisterAttack > jonSnowAttack) {
//   console.log("Jamie has a better attack than Jon")
// } else {
//   console.log("Jamie & Jon have the same attack")
// }

//Jamie knows he's better than Jon he wants to fight him
//Let's create some additional stats for Jon

let jonSnowHealth = 100
let jonSnowDefense = 0

//Jamie strikes first! Let's see if Jon is dead
if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon has been struck down by a thunderous blow from Jamie")
} else {
  jonSnowHealth -= jamieLannisterAttack
  console.log(`Jamie lands a strike!\nJon Snow health: ${jonSnowHealth}`)
}

//Jon snow decides he should defend himself
jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
 console.log("Jon is dead")
} else {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
  console.log(`Jamie lands a strike!\nJon Snow health: ${jonSnowHealth}`)
}

//Arya wants to help Jon, she throws him a health pack
let healthPack = 50
if ((jonSnowHealth + healthPack) > 100) {
  jonSnowHealth = 100
} else {
  jonSnowHealth + healthPack
}

console.log("Arya throws Jon a health pack.\nJon's health: " + jonSnowHealth)

//Jamie decides to go for a critical hit.
let criticalHit = false

if (criticalHit) {
  console.log("That hurt a lot")
} else {
  console.log("'Tis but a scratch")
}

//Jamie performs a special 5-strike attack
// for (let i = 0; i < 15; i++) {
//   if(jonSnowHealth <= 0) {
//     console.log("Jon is dead")
//     jonSnowHealth = 0
//     break
//   } else {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(`Jon's Healths is at ${jonSnowHealth}`)
//   }
// }

while(jonSnowHealth > 0) {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
  if (jonSnowHealth < 0) {
     jonSnowHealth = 0
  }
  console.log(`Jon's health is at: ${jonSnowHealth}`)
}


//jamie goes hulk mode. And beats Jon to death