/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 25
let skywalkerAattack = 35

if(kenobiAttack > skywalkerAattack){
    console.log("Obiwan has better attack")
} else if(kenobiAttack < skywalkerAattack) {
    console.log("annakin has better attack")
} else {
    console.log("obiwan and anakin have the same attack")
}

let kenobiHealth = 100 
let kenobiDefense = 0

if(skywalkerAattack >= kenobiHealth) {
    console.log("obiwan was slain")
} else {
    kenobiHealth = kenobiHealth - skywalkerAattack
    console.log("obiwan's health is now", + kenobiHealth)
}

kenobiDefense += 30

if((kenobiHealth + 50) >= 100){
    kenobiHealth = 100
} else {
    kenobiHealth += 50
}

for(let i = 0; i < 5; i++){
    kenobiHealth -= (skywalkerAattack - kenobiDefense)
    console.log(`obiwan's health is now ${kenobiHealth}`)
}

while(kenobiHealth > 0){
    kenobiHealth -= (skywalkerAattack - kenobiDefense)
    console.log(kenobiHealth)
    if(kenobiHealth <= 0){
        console.log("obiwan has been slain")
    }
}
