const arrays = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const numerosPrimos = arrays.filter((numerosPrimos) => {
  if (numerosPrimos < 1) {
    return false;
  }

  if (numerosPrimos === 1 || numerosPrimos === 2) {
    return true;
  }

  let divisor = 2;

  while (divisor < numerosPrimos) {
    if (numerosPrimos % divisor === 0) {
      return false;
    }
    divisor += 1;
  }

  return true;
});

console.log(numerosPrimos);
