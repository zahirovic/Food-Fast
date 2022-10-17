// Initialize and add the map
function initMap() {
  // The location of Uluru
  console.log("hi")
  const uluru = { lat: 44.9778, lng: -93.2650 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;


const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "55414");
encodedParams.append("currency", "USD");

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd88954a20fmshc572a958b968a43p17e4bajsnef7ad1b1dfa0',
    'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
  },
  body: encodedParams
};

fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// jQuery
$('#submitid').click(function () {
  var query = $('#myid').val();
  var apiKey = 'AIzaSyDrvgCJGPsMiJTXsoFfwRcpGKqxP30P_jk';
  var baseUrl = '';

  var foodSearchUrl = baseUrl + ''

$(document).ready(function() {
  $("#someform").submit(function(){
      $.ajax({
          url: foodSearchUrl + '&q=' + encodeURI(query),
          dataType: "jsonp",
          success: searchCallback
      });
      return false;
  });
});