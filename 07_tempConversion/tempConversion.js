

const convertToCelsius = function(temp) {
  const FAR = (temp - 32) * (5/9);
  return Math.round(FAR * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const CEL = (temp * (9/5) + 32);
  return Math.round(CEL * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
