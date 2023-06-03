import { getShowDetails } from "./tvmaze-api.js";
const url = new URL(document.URL)
const searchParams = url.searchParams;
const showId = searchParams.get("id");
getShowDetails(showId, (show)=>{
    console.log(show);
    const title = document.getElementById("title");
    const image = document.getElementById("image");
    const explan = document.getElementById("explan");
    const genres = document.getElementById("genres");
    const imdb = document.getElementById("imdb");
    const premier = document.getElementById("premier");

    imdb.innerHTML += show.rating.average;
    if (show.rating.average == null){
        imdb.innerHTML = "⭐ not available";
    }
    title.innerHTML = show.name;
    explan.innerHTML = show.summary;
    genres.innerHTML = show.genres;
    image.setAttribute("src", show.image.original);
    premier.innerHTML = show.language;
})