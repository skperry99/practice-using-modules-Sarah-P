const chalk = require('chalk');

let cities = {
    london: {
        temperature: 46,
        conditions: 'Clear',
        humidity: 77,
        windSpeed: 1
    },
    tokyo: {
        temperature: 71,
        conditions: 'Cloudy',
        humidity: 46,
        windSpeed: 8
    },
    seattle: {
        temperature: 59,
        conditions: 'Partly Cloudy',
        humidity: 64,
        windSpeed: 5
    },
    sydney: {
        temperature: 69,
        conditions: 'Drizzle',
        humidity: 81,
        windSpeed: 8
    },
};

function showWeatherData(city) {
    let lCity = city.toLowerCase();
    console.log(chalk.bgRed.bold(`\n***${city.toUpperCase()} WEATHER REPORT***`));
    console.log(chalk.cyan(`Temperature: ${cities[lCity].temperature}\u00B0 F`));
    console.log(chalk.yellow(`Conditions: ${cities[lCity].conditions}`));
    console.log(chalk.green(`Humidity: ${cities[lCity].humidity}%`));
    console.log(chalk.hex('#800080')`Wind Speed: ${cities[lCity].windSpeed} mph`);
}

module.exports = { showWeatherData };