let searchButton = document.querySelector("button");
let apiKey = "cD7O8yM6wyJ7CbiB7dH7I77idLCSlMcm";

searchButton.addEventListener("click",() =>{
    sendGiphyRequest()
})


async function sendGiphyRequest() {
    let userInput = document.querySelector("#input").value.trim();
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${userInput}`)
    console.log(response)
    let gifs = await response.json()
    console.log(gifs);
    useGiphyData(gifs);
};

function useGiphyData(gifs){
    document.querySelector("#wrapper").innerHTML = `<img src = "${gifs.data[0].images.original.url}">`
    document.querySelector("#title").innerText = `"${gifs.data[0].title}"`
};


