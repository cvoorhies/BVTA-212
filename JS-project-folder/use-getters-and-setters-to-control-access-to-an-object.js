// Only change code below this line
class Thermostat{
  constructor(fTemp){
    this.fTemp = fTemp;
  }
  //getter gets Celsius
  get temperature(){
    return 5/9 * (this.fTemp - 32);
   }
  //setter sets temp to Fahrenheit
  set temperature(cTemp){
   return this.fTemp = cTemp * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
