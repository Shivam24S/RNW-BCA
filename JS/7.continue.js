let num = [1, 10, 20, 30, 4, 0, 40, 50, 6, 0, 5, 8, 1, 3, 7, 9, 6];

for (let i = 0; i <= num.length; i++) {
  if (num[i] % 2 !== 0) {
    continue;
  }
  console.log(num[i]);
}
