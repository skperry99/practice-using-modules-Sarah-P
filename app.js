const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const showData = require('./weatherfetch');

const argv = yargs(hideBin(process.argv))
.option('city', {
    alias: 'c',
    describe: 'City name for weather information',
    type: 'string',
    demandOption: true
}).argv

const cityName = argv.city;
console.log(`\nFetching ${cityName} weather data...`);

showData.showWeatherData(cityName);