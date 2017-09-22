console.log("Sanity Check");
let arr = [1,2,3,4,5,6,7];
const x = (y) => (y);
console.log(arr.maps(x));

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

$("#getData").click(function() {
  $.ajax({
    url:"https://swapi.co/api/films/" + 1 + "/",
    type : "GET",
    success : get = (data) => getData(data)
  });
});