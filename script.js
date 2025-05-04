let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let withN = []
let without = [];

for (let i = 0; i < letterSearch.length; i++) {
  if (letterSearch[i].includes('n')) {
    withN.push(letterSearch[i])
  }else {
    without.push(letterSearch[i]);
  }
}

console.log(withN);
console.log(without);