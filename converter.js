// Prompt the user to input a Fahrenheit temperature
let fahrenheitTemp = prompt(` Enter a temperature in Fahrenheit and we will convert it to Celcius`);

// function to convert Fahrenheit to Celcius
const convertToCelcius = (fahrenheitTemp) => (fahrenheitTemp - 32) * (5/9);


// Function to describe the temperature
const describeTemperature =(fahrenheitTemp) => {
  if (fahrenheitTemp <= 32){
    return "very cold";
  } else if (fahrenheitTemp > 32 && fahrenheitTemp <= 64) {
    return "cold";
  } else if (fahrenheitTemp > 64 && fahrenheitTemp <= 86) {
    return "warm" ;
  } else if (fahrenheitTemp > 86 && fahrenheitTemp <= 100) {
    return "hot";
  } else if (fahrenheitTemp >= 100) {
    return "very hot";
  }

}

// Convert the number to Celcius
const celciusTemp = convertToCelcius(fahrenheitTemp);

//Temperature description
const temperatureDesciption = describeTemperature(fahrenheitTemp);

//Alert the user with the results
alert(`You enetered ${fahrenheitTemp} degree in Fahrenheit. That is ${celciusTemp} degree in Celcius, which is ${temperatureDesciption}!`)
console.log(`You enetered ${fahrenheitTemp} degree in Fahrenheit. That is ${celciusTemp} degree in Celcius, which is ${temperatureDesciption}!`)