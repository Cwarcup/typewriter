// Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter.
const sentence = "hello there from lighthouse labs";

// let index = 0;

// // printing each letter one at a time
// const typewriter = setInterval(() => {
//   if (index < sentence.length) {
//     process.stdout.write(sentence[index]);
//     index++;
//   }
  
//   if (index === sentence.length) {
//     process.stdout.write("\n"); // new line at the end
//     clearInterval(typewriter);
//   }
// }, 50);

let counter = 50;
for (const letter of sentence) {
  setTimeout(() => process.stdout.write(letter), counter);
  counter += 50;
}
