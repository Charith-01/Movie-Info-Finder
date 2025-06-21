function search() {
    let inputTag = document.getElementById("input");
    let movieName = inputTag.value.trim(); // Added trim() to remove whitespace
    
    if (!movieName) {
        alert("Please enter a movie name");
        return;
    }

    let htmlRequest = new XMLHttpRequest();
    let url = "https://www.omdbapi.com/?apikey=2329d79a&t=" + encodeURIComponent(movieName);

    htmlRequest.open("GET", url);
    htmlRequest.responseType = "json"; // Moved before send()
    
    htmlRequest.onload = function() {
        let response = htmlRequest.response;
        console.log(response);

        if (response.Response === "False") {
            alert("Movie not found! Please try another name.");
            return;
        }

        // Show the movie card
        document.getElementById("movieCard").classList.remove("hidden");

        // Update poster
        let imgTag = document.getElementById("poster");
        imgTag.src = response.Poster || "https://via.placeholder.com/300x450?text=No+Poster+Available";

        // Update all details
        document.getElementById("title").textContent = response.Title || "N/A";
        document.getElementById("year").textContent = response.Year || "N/A";
        document.getElementById("rated").textContent = response.Rated || "N/A";
        document.getElementById("released").textContent = response.Released || "N/A";
        document.getElementById("runtime").textContent = response.Runtime || "N/A";
        document.getElementById("genre").textContent = response.Genre || "N/A";
        document.getElementById("director").textContent = response.Director || "N/A";
        document.getElementById("writer").textContent = response.Writer || "N/A";
        document.getElementById("actors").textContent = response.Actors || "N/A";
        document.getElementById("plot").textContent = response.Plot || "N/A";
        document.getElementById("language").textContent = response.Language || "N/A";
        document.getElementById("country").textContent = response.Country || "N/A";
        document.getElementById("awards").textContent = response.Awards || "N/A";
        document.getElementById("boxoffice").textContent = response.BoxOffice || "N/A";
        document.getElementById("production").textContent = response.Production || "N/A";
        document.getElementById("dvd").textContent = response.DVD || "N/A";
        document.getElementById("type").textContent = response.Type || "N/A";
        document.getElementById("website").textContent = response.Website || "N/A";
        document.getElementById("rating").textContent = response.imdbRating || "N/A";
        document.getElementById("votes").textContent = response.imdbVotes || "N/A";
        document.getElementById("metascore").textContent = response.Metascore || "N/A";
    };
    
    htmlRequest.onerror = function() {
        alert("Error fetching movie data. Please try again later.");
    };
    
    htmlRequest.send();
}