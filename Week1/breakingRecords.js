function breakingRecords(scores) {
  let minRecord = scores[0];
  let maxRecord = scores[0];
  let max = 0;
  let min = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minRecord) {
      minRecord = scores[i];
      min++;
    }
    if (scores[i] > maxRecord) {
      maxRecord = scores[i];
      max++;
    }
  }
  return [max, min];
}
