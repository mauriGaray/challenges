function miniMaxSum(arr) {
  // Write your code here
  let max = 0;
  let min = 0;

  let arraySum = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < arraySum.length; i++) {
    max = max + arraySum[i];
  }
  for (let i = 0; i < arraySum.length - 1; i++) {
    min = min + arraySum[i];
  }
  console.log(min, max);
}
/* Versión mejorada 
function miniMaxSum(arr) {
  // Ordenar el array
  arr.sort((a, b) => a - b);

  // Calcular la suma total
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // El mínimo es la suma total menos el último (máximo) elemento
  const min = totalSum - arr[arr.length - 1];

  // El máximo es la suma total menos el primer (mínimo) elemento
  const max = totalSum - arr[0];

  // Imprimir los resultados
  console.log(min, max);
}
  */
miniMaxSum([2, 1, 3, 4, 5]);
