// Greedy -> membuat berbagai segala kemungkinan, kemudian dicoba satu per satu hingga menemukan hasil optimal

// -- CONTOH 1
function coinChange(amount: number) {
  const coins = [25, 10, 5, 1];
  let result: number[] = [];
  let moneyLeftover = amount;

  for (const coin of coins) {
    while (moneyLeftover >= coin) {
      result.push(coin);
      console.log("result : ", result);
      moneyLeftover = moneyLeftover - coin;
      console.log("money : ", moneyLeftover);
    }
  }
  return result;
}

// console.log(coinChange(42));

// -- CONTOH 2
function minimumCoins(coins: number[], amount: number) {
  let len = coins.length;
  let result = 0;

  coins = coins.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      console.log(amount);
      console.log(result);
      result++;
    }
  }

  return result;
}

console.log(minimumCoins([25, 10, 5, 1], 42));
