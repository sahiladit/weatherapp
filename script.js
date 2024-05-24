let city = document.querySelector("#city");
let submit = document.querySelector("#submit");
let city_name = document.querySelector('.city_name');
let temp = document.querySelector("#temp");
let temp1 = document.querySelector("#temp1");
let humidity = document.querySelector("#humidity");
let max_temp = document.querySelector("#max_temp");
let min_temp = document.querySelector("#min_temp");


const weather = async(city) => {


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5309e63015msh0b7a99f8feeca6ep173a4fjsnec770eb6590e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	city_name.innerHTML = city;
	temp.innerHTML = result.temp;
	humidity.innerHTML = result.humidity;
	wind_speed.innerHTML = result.wind_speed;
	max_temp.innerHTML = result.max_temp;
	min_temp.innerHTML = result.min_temp;
} catch (error) {
	console.error(error);
}
}

submit.addEventListener("click",(e) => {
    e.preventDefault();
    weather(city.value);
})

const weatherinMumbai = async() => {


	const url1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
	const options1 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5309e63015msh0b7a99f8feeca6ep173a4fjsnec770eb6590e',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	try {
		const response2 = await fetch(url1, options1);
		const result2 = await response2.json();
		temp1.innerHTML = result2.temp;
		humidity1.innerHTML = result2.humidity;
		wind_speed.innerHTML = result2.wind_speed;
		console.log(result2);
	} catch (error) {
		console.error(error);
	}
	}


