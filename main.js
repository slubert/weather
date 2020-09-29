const output = document.getElementById("output");

fetch(api.openweathermap.org/data/2.5/weather?q=68500&appid=356df974cc00f7134102d5135f4368d6)
    .then(result => result.jason())
    .then(whenLoaded)

function whenLoaded(data){
    console.log(data.temp)
}



// https://openweathermap.org/current#zip