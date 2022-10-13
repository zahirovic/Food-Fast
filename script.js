const encodedParams = new URLSearchParams();
encodedParams.append("currency", "USD");
encodedParams.append("language", "en_US");
encodedParams.append("location_id", "15333482");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '24aa218f84mshbf2fafcf824733cp1a38fbjsn5414d56bed0e',
		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://worldwide-restaurants.p.rapidapi.com/detail', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));