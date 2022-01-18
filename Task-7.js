function temperatureInCelsius(x){
    const convert = (x*1.8)+32
    return convert
} 

function temperatureInFahrenhiet(y){
    const convertToCelsius =Math.round((y-32)*(5/9))
    return convertToCelsius
}temperatureInFahrenhiet(80.6)