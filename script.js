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

var city = "";
var minneapolis = "43323";
var duluth = "43018";
var stPaul = "43501";
var minnetonka = "43327";
var eagan = "43022";
var bloomington = "36942";


const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", city);
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

//drop down
  var myOptions = {
    val1 : 'bloomington',
    val2 : 'duluth',
    val3 : 'eagan',
    val4 : 'minneapolis',
    val5 : '                                                        minnetonka',
    val6 : 'stPaul'
};
var mySelect = $('#myCities');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
