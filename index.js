function search()
{
    let inputTag = document.getElementById("input")
    let movieName = inputTag.value

    //OMDb API key = 2329d79a

    let htmlRequest = new XMLHttpRequest()
    
    let url = "https://www.omdbapi.com/?apikey=2329d79a&t=" + encodeURIComponent(movieName);

}