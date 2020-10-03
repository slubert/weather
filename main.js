const output = document.getElementById("output");
const cityInput = document.getElementById("cityInput");
const submit = document.getElementById("form")

submit.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()
    let place = cityInput.value;
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=c84bdf644399cebe626d9897429823dd&units=metric")
        .then( res => res.json() )
        .then(whenLoaded)
    
    function whenLoaded(data){
        output.textContent = data.main.temp
        
        console.log(data)
        console.log(data.main.temp)
    }
}




// https://openweathermap.org/current#zip