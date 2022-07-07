function convertTemperature(temperature) {
    const celsiusExists = temperature.toUpperCase().includes('C')
    const fahrenheitExists = temperature.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Use uma das grandezas padrões de temperatura')
    }

    // fluxo ideal, F -> C
    updatedTemperature = Number(temperature.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let tempScale = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists) {
        updatedTemperature = Number(temperature.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        tempScale = 'F'
    }

    return formula(updatedTemperature) + tempScale
}

try {
    console.log(convertTemperature('10c'))
    console.log(convertTemperature('50f'))
    console.log(convertTemperature('50z'))


} catch (error) {
    console.log(error)
}