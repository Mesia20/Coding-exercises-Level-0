function temperatureInCelsius(tempInCelsius){
    const convertToFahrenhiet = (tempInCelsius*1.8)+32
    return convertToFahrenhiet
} 

function temperatureInFahrenhiet(tempInFahren){
    const convertToCelsius =Math.round((tempInFahren-32)*(5/9))
    return convertToCelsius
}temperatureInFahrenhiet(80.6)