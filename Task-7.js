function temperatureInCelsius(x){
    var convert = (x*1.8)+32
    console.log("The temperature in Fahrenheit is "+ convert+"F")
} 

function temperatureInFahrenhiet(y){
    var convertToCelsius =Math.round((y-32)*(5/9))
    console.log("The temperature in Celsius is "+convertToCelsius+"°C")
}temperatureInFahrenhiet(80.6)