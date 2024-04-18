// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }
// // [initialization] used to initaialize a counter variable
// let age = 30 (we're creating a variable, age)
// // [condition] an expresseion evaluated through each pass of the loop- if true the statement in the loop body are executed. if false, the loop exits 
// age < 40 (run code in the loop until the age is not less than 40)
// // [iteration] expression executed at the end of each iteration.involves incrementing or decrementing a counter, bringing the loop closer to completion
// age++ (increases year by 1 aafter every pass through the loop)
// // [loop body] code thta runs on each pass through the loop 
// set of statement s that we want to run when the condition evaluates to  true


// for(let age = 30; age < 40; age++) {
//   console.log (`I'm ${age} years old. Happy birthday to me!`);
// }
// // use let instead of const because we need to increment the value of age.

// Using for with Arrays

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards()


// Exercise
const writeCards = (names, occasion) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(Thank you, ${names[i]}, for the wonderful ${occasion} gift!);
    }
    return messages;
  };
  
  const names = ["whit", "jane", "whishi"];
  const occasion = "birthday";
  const messages = writeCards(names, occasion);
  console.log(messages);



let count = 10;
function countDown(count){
    while(count >=0){
        console.log(count)
        count --;
    }
    return count;
}
countDown(count);
)

// The while loop



