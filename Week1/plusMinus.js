function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zero++;
    if (arr[i] > 0) pos++;
    if (arr[i] < 0) neg++;
    total++;
  }
  console.log((pos / total).toFixed(6));
  console.log((neg / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}

//optimizado por AI
/*function plusMinus(arr) {
  let pos = 0,
    neg = 0,
    zero = 0,
    total = arr.length;

  arr.forEach((num) => {
    if (num > 0) pos++;
    else if (num < 0) neg++;
    else zero++;
  });

  console.log((pos / total).toFixed(6));
  console.log((neg / total).toFixed(6));
  console.log((zero / total).toFixed(6));}*/

plusMinus([1, -5, -6, 5, 8, 0, 0, 0, 5, -52, 0]);
