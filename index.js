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


