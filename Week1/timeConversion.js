function timeConversion(s) {
  // Write your code here
  let result = "";
  let timeToConv = s.split("");

  if (timeToConv[8] === "A") {
    if (timeToConv[0] === "1" && timeToConv[1] === "2") {
      timeToConv[0] = "0";
      timeToConv[1] = "0";
      timeToConv.slice(0, 7);
      timeToConv.splice(8, 9);
      result = timeToConv.join("");
      return result;
    } else {
      timeToConv.slice(0, 7);
      timeToConv.splice(8, 9);
      result = timeToConv.join("");
      return result;
    }
  } else {
    if (timeToConv[0] === "1" && timeToConv[1] === "2") {
      timeToConv.slice(0, 7);
      timeToConv.splice(8, 9);
      result = timeToConv.join("");
      return result;
    } else {
      let number = Number(timeToConv[0] + timeToConv[1]) + 12;
      timeToConv.shift();
      timeToConv.shift();
      timeToConv.unshift(number.toString());
      result = timeToConv.slice(0, 7).join("");
      return result;
    }
  }
}
/*function timeConversion(s) {
  let hours = Number(s.slice(0, 2));
  console.log(hours);
  
  const period = s.slice(8);
  console.log(period);
  

  if (period === "AM") {
    if (hours === 12) hours = 0;
  } else {
    if (hours !== 12) hours += 12;
  }

  const convertedHours = hours.toString().padStart(2, "0");
  console.log(convertedHours + s.slice(2, 8));
   
}*/
timeConversion("12:05:45PM");
