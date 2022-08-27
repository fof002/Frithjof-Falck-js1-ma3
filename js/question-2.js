//QUESTION 2

const apiKey = "b475160be7a048f190ac07a01264f668";
const urlValidated = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const container = document.querySelector(".container");
const loadContainer = document.querySelector(".loadContainer");

async function getData () {

    container.innerHTML = "loading...";

    try {
        const response = await fetch(urlValidated);
        const results = await response.json();
        const games = results.results;

        container.innerHTML = "";

            for (let i = 0; i < games.length; i++) {

                container.innerHTML += `<div class="gamecontainer">
                                        <h2>${games[i].name}</h2>
                                        <p>${games[i].rating}</p>
                                        <p>${games[i].tags.length}</p>
                                        </div>`;

                if (i === 7) {

                    break;

                }

            }
    }
    
    catch (error) {

        container.innerHTML = "An error occured. contact helpdesk :)";

    }
}

getData();