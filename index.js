// Code your solutions in this file
//for (let age = 0; age < 42; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //}

  //return gifts;
//wrapGifts(gifts);


// const person = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(person) {
//     for(let i = 0; i < person.length; i++) {
//     return([`Thank you, ${person[i]}, for the wonderful surprise gift!`]);
//     }
//     writeCards(person);
// }



for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`)
  //debugger;
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
  for (let i =0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
    //debugger
  }
  return gifts;
}

wrapGifts(gifts)



// let writeCards = 
// function writeCards(["Guadalupe", "Ollie", "Aki",] "surprise") {
//   let thankYouCards = []
//   for (let i =0; i < names.length; i++){
//     thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
//   }
// }
// return thankYouCards

function writeCards( namesArray, event ) {
   let thankYouCards = []
   for ( let i = 0; i < namesArray.length; i++ ) {
     thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
   }
   return thankYouCards
 }

 function countDown(){
 let countDown = 11
 while (countDown > 0){
  console.log(countDown -=1)
 }
}