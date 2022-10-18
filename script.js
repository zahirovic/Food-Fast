// 
var select = document.getElementById('myCities');

// Initialize and add the map
function initMap(restaurants) {
 if (!restaurants) return
 
  console.log(restaurants, "mapFetch")

  const coords = { 
    lat: parseFloat(restaurants[0].latitude),
    lng: parseFloat (restaurants[0].longitude)


    };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
   center: coords,
  });

  for (var i = 0; i < 10; i++) {
    const coords = { 
      lat: parseFloat(restaurants[i].latitude),
      lng: parseFloat (restaurants[i].longitude)

  
      };

      var marker = new google.maps.Marker({
        position: coords,
        map: map,

    }); 
    console.log(coords, "coordinates")




    // The location of Uluru
    // const uluru = { lat: 44.9778, lng: -93.2650 };
    // The map, centered at Uluru
  
    // The marker, positioned at Uluru
  
  }
}

// initMap()
// window.initMap = initMap;

// var city = "";
var minneapolis = "43323";
var duluth = "43018";
var stPaul = "43501";
var minnetonka = "43327";
var eagan = "43022";
var bloomington = "36942";

function restaurantFetch(event) {
  console.log("hi")
  var city = select.options[select.selectedIndex].value;

  // if stPaul clicked then city = loc id. var city = ()
  // click event 

  // Minneapolis
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
    .then(response => {
      var restaurants = response.results.data;
      var displayBox = document.getElementById("container");
      for (var i = 0; i < restaurants.length; i++) {
        var li = document.createElement("li");
        li.textContent = restaurants[i].name;
        displayBox.appendChild(li)
      }
      console.log(response)
      initMap(restaurants)
    })
    .catch(err => console.error(err));

}


  //drop down
//   var myOptions = {
//     val1 : 'bloomington',
//     val2 : 'duluth',
//     val3 : 'eagan',
//     val4 : 'minneapolis',
//     val5 : 'minnetonka',
//     val6 : 'stPaul'
// };
// var mySelect = $('#myCities');
// $.each(myOptions, function(val, text) {
//     mySelect.append(
//         $('<option></option>').val(val).html(text)
//     );
// });

// jQuery
// // $('#submitid').click(function () {
//   var query = $('#myid').val();
//   var apiKey = 'AIzaSyDrvgCJGPsMiJTXsoFfwRcpGKqxP30P_jk';
//   var baseUrl = 'https://maps.googleapis.com/';

//   var foodSearchUrl = baseUrl + 'maps/api/js?key=' + apiKey;

// $(document).ready(function() {
//   $("#someform").submit(function(){
//       $.ajax({
//           url: foodSearchUrl + '&q=' + encodeURI(query),
//           dataType: "jsonp",
//           success: searchCallback
//       });
//       return false;
//   });
// });

//   function searchCallback(data) {
//     $(document.body).append(
//       'Found ' + data.total + ' results for ' + query
//   );
//     var city = data.city;
//     $.each(city, function (index, city));
