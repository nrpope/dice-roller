const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('How many dice do you want to roll? ', function (amount) {
  rl.question('What sided die? ', function (diceType) {
    console.log(`You rolled ${amount}d${diceType}`);
    // rl.close();
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});

function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const rollDice4 = () => rollDice(1, 4);
const rollDice6 = () => rollDice(1, 6);
const rollDice8 = () => rollDice(1, 8);
const rollDice12 = () => rollDice(1, 12);
const rollDice20 = () => rollDice(1, 20);
