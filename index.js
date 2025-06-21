function search() {
  const movieName = document.getElementById("input").value.trim();
  const movieCard = document.getElementById("movieCard");

  // Always hide card before new search
  movieCard.classList.add("hidden");

  if (!movieName) {
    alert("Please enter a movie name.");
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=2329d79a&t=${encodeURIComponent(movieName)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        alert("Movie not found. Please try again.");
        return;
      }

      // Fill in the data
      document.getElementById("poster").src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=Poster+Not+Available";
      document.getElementById("title").textContent = data.Title;
      document.getElementById("year").textContent = data.Year;
      document.getElementById("rated").textContent = data.Rated;
      document.getElementById("released").textContent = data.Released;
      document.getElementById("runtime").textContent = data.Runtime;
      document.getElementById("genre").textContent = data.Genre;
      document.getElementById("director").textContent = data.Director;
      document.getElementById("writer").textContent = data.Writer;
      document.getElementById("actors").textContent = data.Actors;
      document.getElementById("plot").textContent = data.Plot;
      document.getElementById("language").textContent = data.Language;
      document.getElementById("country").textContent = data.Country;
      document.getElementById("rating").textContent = data.imdbRating;
      document.getElementById("metascore").textContent = data.Metascore;
      document.getElementById("awards").textContent = data.Awards;
      document.getElementById("boxoffice").textContent = data.BoxOffice;

      // ✅ Show movie card now that data is available
      movieCard.classList.remove("hidden");
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("An error occurred while fetching movie data.");
    });
}
