let city = document.querySelector("#city");
let submit = document.querySelector("#submit");
let city_name = document.querySelector('.city_name');
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let max_temp = document.querySelector("#max_temp");
let min_temp = document.querySelector("#min_temp");
let cursor = document.querySelector(".cursor");
let main = document.querySelector("body");
let card = document.querySelector(".card");

main.addEventListener("mousemove",function(dets){
	cursor.style.display = "block";
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
        duration:1,
		opacity:"1"
    })
});
main.addEventListener("mouseleave",function(){
    cursor.style.display = "none";
});

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


