let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
   let letter = input[i];
 
   for (let j = 0; j < vowels.length; j++) {
   if (letter === vowels[j]) {
         resultArray.push(letter)

         if (letter === 'e' || letter === 'u') {
            resultArray.push(letter)
         }
      }
   }
}

const whaleTalk = resultArray.join('').toUpperCase();

console.log(whaleTalk)
