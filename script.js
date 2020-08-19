const resultArea = document.querySelector(".result");
const searchButton = document.querySelector(".button");
const search = document.getElementById("search");
const totalCase = document.getElementById("case");
const caseNumber = document.getElementById("caseNumber");
const recover = document.getElementById("recover");
const recoverNumber = document.getElementById("recoverNumber");
const death = document.getElementById("death");
const deathNumber = document.getElementById("deathNumber");
const results = document.getElementById("results");
const country = document.getElementById("country");

fetch(` https://coronavirus-19-api.herokuapp.com/all`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    caseNumber.innerHTML = data.cases;
    recoverNumber.innerHTML = data.recovered;
    deathNumber.innerHTML = data.deaths;
    results.innerHTML = "Till: " + new Date();
  });
searchButton.addEventListener("click", function () {
  fetch(`https://coronavirus-19-api.herokuapp.com/countries`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (search.value == data[i].country) {
          console.log("found");
          country.innerHTML = data[i].country;
          caseNumber.innerHTML = data[i].cases;
          recoverNumber.innerHTML = data[i].recovered;
          deathNumber.innerHTML = data[i].deaths;
        }
      }
    });
});
