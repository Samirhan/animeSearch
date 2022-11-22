
const url = "https://kitsu.io/api/edge";
let cards = "";
const foot = document.getElementById("footer")
const btn = document.getElementById("buttonSearch");
const input = document.getElementById("searchAnime");
async function getAnimeList(text) {

    fetch(`${url}/anime?filter[text]=${text}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            if (!!response?.data.length) {
                arrConvertCards(response.data)
            }

        })
        .catch((error) => {
            console.log(error)
        })
}
btn.onclick = function () {
    getAnimeList(input.value);
    
}



input.addEventListener("keyup", ({ keyCode }) => {
    if (keyCode === 13) {
        getAnimeList(input.value);
    }
})

function createAnimeCard(element) {
    return (`<div id="card">
        <div class="animeContent">
           <div class="animeName">${element.attributes.canonicalTitle}</div>
           <div class="animeEpCount">Episode count:${element.attributes.episodeCount}</div>
           <div class="animeAgeRate">Age Rating:${element.attributes.ageRatingGuide}</div>
           <div class="animeInfo">${element.attributes.synopsis}</div>
         </div>
          <div class="wrappedPicture"><img src="${element.attributes.posterImage.medium}" class="animePicture" alt=""></div>
          </div>
          `
          );

}
function arrConvertCards(data) {
    data.forEach(element => {
        cards += createAnimeCard(element)
    });
    document.getElementById("container").innerHTML = cards;
    
}
const screenWidth = window.screen.width;
iconRedact = () => {
    if (screenWidth <= 1000) { document.getElementsByClassName("fa fa-search")[0].className = "fa fa-search fa-2x" }
}
iconRedact();



