function plusMinus(arr) {
  const total = arr.length;
  const totalArray = [0, 0, 0];
  arr.forEach((item) => {
    if (item === 0) {
      totalArray[2]++;
    } else if (item > 0) {
      totalArray[0]++;
    } else {
      totalArray[1]++;
    }
  });

  totalArray.forEach((count) => {
    const newItem = count / total;
    console.log(newItem.toFixed(6));
  });
}
plusMinus([-4, 3, -9, 0, 4, 1]);
