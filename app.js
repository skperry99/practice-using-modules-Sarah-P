const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const chalk = require('chalk');
const showData = require('./weatherfetch');

const argv = yargs(hideBin(process.argv))
.option('city', {
    alias: 'c',
    describe: 'City name for weather information',
    type: 'string',
    demandOption: true
}).argv

const cityName = argv.city;
console.log(`Gathering weather data for ${cityName}...`);

showData.showWeatherData(cityName);