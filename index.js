function search()
{
    let inputTag = document.getElementById("input")
    let movieName = inputTag.value

    //OMDb API key = 2329d79a

    let htmlRequest = new XMLHttpRequest()

    let url = "https://www.omdbapi.com/?apikey=2329d79a&t=" + encodeURIComponent(movieName);

    htmlRequest.open("GET", url)

    htmlRequest.send()

    htmlRequest.responseType = "json"

    htmlRequest.onload = ()=>{
        let response = htmlRequest.response
        console.log(response)

        let imgTag = document.getElementById("poster")
        imgTag.src = response.Poster

        document.getElementById("title").textContent = response.Title
        document.getElementById("year").textContent = response.Year
        document.getElementById("rated").textContent = response.Rated
        document.getElementById("released").textContent = response.Released
        document.getElementById("runtime").textContent = response.Runtime
        document.getElementById("genre").textContent = response.Genre
        document.getElementById("director").textContent = response.Director
        document.getElementById("writer").textContent = response.Writer
        document.getElementById("actors").textContent = response.Actors
        document.getElementById("plot").textContent = response.Plot
        document.getElementById("language").textContent = response.Language
        document.getElementById("country").textContent = response.Country
        document.getElementById("awards").textContent = response.Awards
        document.getElementById("boxoffice").textContent = response.BoxOffice
        document.getElementById("production").textContent = response.Production
        document.getElementById("dvd").textContent = response.DVD
        document.getElementById("type").textContent = response.Type
        document.getElementById("website").textContent = response.Website
        document.getElementById("rating").textContent = response.imdbRating
        document.getElementById("votes").textContent = response.imdbVotes
        document.getElementById("metascore").textContent = response.Metascore
    }

}