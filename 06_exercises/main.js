const readline = require('readline')

// let i = 0; 
// 
// while(i < 10) {
//   console.log(i)
//   i++	
// }

// let i = 10
// 
// while(i >= 0){
//   console.log(i)
//   i--
// }

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var n = 0

rl.question('Digite um número: ', function(userNumber){
  for(let i = 0; i <= userNumber; i++ ){
    console.log(i)
  }

  rl.close()
});

// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// Exercise 4

for(let i = 0; i <= 7; i++){
  console.log('#'.repeat(i));
};

// Exercise 5

let userNumber = 0

while(userNumber <= 10){
  console.log(`${userNumber} * ${userNumber} = ${userNumber * userNumber}`);
  userNumber++
}

// Exercise 6

let clientNumber = 0

while(clientNumber <= 10){
  console.log(`${clientNumber} ${clientNumber**2} ${clientNumber**3}`);
  clientNumber++
}

console.log('============== Números pares ==================')

for(let i = 0; i <= 100; i++){
  if(i%2 == 0){
    console.log(i);
  }
};

console.log('============== Números impares ==================')

for(let i = 0; i <= 100; i++){
  if(i%2 == 1){
    console.log(i);
  }
};

console.log('============== Números sum ==================')

sum = ((0 + 100) * 101)/2

console.log(sum)