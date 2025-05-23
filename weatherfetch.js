const chalk = require('chalk');

function showWeatherData(city) {
    console.log(chalk.blue.bold.underline(`${city} Weather Report`));
    console.log(chalk.red(`Temperature: 78 F`));
    console.log(chalk.yellow(`Conditions: Cloudy`));
    console.log(chalk.green(`Humidity: 71%`));
    console.log(chalk.hex('#800080')`WindSpeed: 1mph`);
}

module.exports = {showWeatherData};