console.log("Sanity Check");
let urls = ["https://swapi.co/api/films/1/", "https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/7/"];


const buildHtmlElements = (responseData) => {
      console.log(responseData);
      $('#results').append(responseData.title + "<br>");
      $('#results').append(responseData.director + "<br>");
      $('#results').append("Episode Number: " + responseData.episode_id + "<br>");
      $('#results').append(responseData.producer + "<br>");
      $('#results').append(responseData.opening_crawl + "<br>");
      //$('#results').append(responseData.releaseDate);
    };
const getData = (response) => buildHtmlElements(response);

let req = (urls) => {
  $.ajax({
    url: urls,
    type : "GET",
    success : get = (data) => getData(data)
  });
}

$("#getData").click(
  req(urls[0]),
  req(urls[1]),
  req(urls[2]),
  req(urls[3]),
  req(urls[4]),
  req(urls[5]),
  req(urls[6])
);