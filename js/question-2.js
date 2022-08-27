const apiKey = "b475160be7a048f190ac07a01264f668";
const urlValidated = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const container = document.querySelector(".container");
const loadContainer = document.querySelector(".loadContainer");

async function getData () {

    try {
        const response = await fetch(urlValidated);
        const results = await response.json();

        const gameResults = results.results;

        console.log(gameResults);

         /*for (i = 0; i = gameResults.length; i++) {

            console.log(gameResults[i].name);

            /*container.innerHTML += `<div>${gameResults[i]}</div>`;*/

            /*if (i === 8) {

                break;

            }*/

    

        }

    catch {

        container.innerHTML = "An error occured";

    }
}

getData();