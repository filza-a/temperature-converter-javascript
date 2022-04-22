// The forecast today is 293 Kelvin
const kelvin = 0
/* Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. */
const celsius = kelvin - 273
/* The equation for conversion is Fahrenheit = Celsius * (9/5) + 32 */
let fahrenheit = celsius * (9/5) + 32
/* When you convert from Celsius to Fahrenheit, you often get a decimal number. */
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
