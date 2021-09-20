var req = new XMLHttpRequest();
req.open("GET", " https://restcountries.eu/rest/v2/all", true);
req.send();
req.onload = function () {
  var result = JSON.parse(req.response);
  console.log(result);
  for (i in result) {
    // Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
    console.log("Flag: " + result[i]["flag"]);

    //Use the same rest countries and print all countries name, region, sub region and population
    console.log("Name: " + result[i]["name"]);
    console.log("Region: " + result[i]["region"]);
    console.log("Sub Region: " + result[i]["subregion"]);
    console.log("Population: " + result[i]["population"]);
  }
};
