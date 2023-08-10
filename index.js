// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
        }
    return messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown() {
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}