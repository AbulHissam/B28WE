var url = `https://restcountries.com/v3.1/all`;
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.send();
req.onload = function () {
  var result = JSON.parse(req.response);
  // Get all the countries from Asia continent /region using Filter function
  var asianCountries = result
    .filter((countries) => countries.region === "Asia")
    .map((countries) => countries.name.common);
  console.log(`Asian countries:${asianCountries}`);
  // Get all the countries with a population of less than 2 lakhs using Filter function
  var countriesWithPopulationLessThan2Lakhs = result
    .filter((countries) => countries.population < 200000)
    .map((countries) => countries.name.common);
  console.log(
    `Countries  with population less than 2 laks: ${countriesWithPopulationLessThan2Lakhs}`
  );
  // Print the following details name, capital, flag using forEach function
  result.forEach((element) => {
    console.log("Name: " + element.name.common);
    console.log("Capital: " + element.capital);
    console.log("Flag: " + element.flag);
    console.log("********************************");
  });
  // Print the total population of countries using reduce function
  var totalPoulation = result
    .map((country) => country.population)
    .reduce(
      (accumulatedPopulation, currentPopulation) =>
        accumulatedPopulation + currentPopulation
    );
  console.log(`Total Population:${totalPoulation}`);
  // Print the country which uses US Dollars as currency.
  var countryUsingUSDAsCurrency = result
    .filter((country) => country.currencies != undefined)
    .filter((country) => country.currencies.hasOwnProperty("USD"))
    .map((country) => country.name.common);
  console.log(`Countries using USD as currency:${countryUsingUSDAsCurrency}`);
};
