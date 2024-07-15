let card = document.querySelector(".weather-card");
let notfound = document.querySelector(".not-found");
let imgerr = document.querySelector(".icon");
let cityName = document.querySelector(".city-name");
let input = document.querySelector(".search-input");
let searchBtn = document.querySelector(".fa-magnifying-glass");
let temp = document.querySelector(".temp");
let sign = document.querySelector(".sign").innerText;
let img = document.querySelector(".small-icon")
let weatherimg = document.querySelector(".icon-control img")
let windSpeed = document.querySelector(".wind")
let humidity = document.querySelector(".humidity")
let imgList = ["clouds","clear","mist","rain","snow"];
searchBtn.addEventListener("click" ,  getWeather )


searchBtn.addEventListener("click" ,  getWeather )

async function getWeather(){
   
    let apiKey = "df318b6f431a161f1d951a2a7badb46e";
    //   let url = `http://api.weatherapi.com/v1 http://api.weatherapi.com/v1?key=${apiKey}&q=${input.value}`
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`
    let response = await fetch(url)
     let weatherData = await response.json()
     if(response.status == 404){
      document.querySelector(".icon-container").style.visibility = "hidden"
        document.querySelector(".last-sec").style.visibility = "hidden"
        notfound.style.visibility = "visible"
     
        
     }else{
             document.querySelector(".icon-container").style.visibility = "visible"
        document.querySelector(".last-sec").style.visibility = "visible"
        notfound.style.visibility = "hidden"
        console.log(weatherData);
        cityName.innerText = weatherData.name
        temp.innerText =`${ Math.floor((weatherData.main.temp))}${sign}`
        cityName.innerText = (weatherData.weather[0].description);
        windSpeed.innerText = weatherData.wind.speed + "Km/h";
        humidity.innerText = weatherData.main.humidity + "%";
        console.log(weatherData.weather[0].main);
        imgList.forEach(img => {
            if((weatherData.weather[0].main).toUpperCase() == img.toUpperCase()){
                weatherimg.src = `images/${img}.png`
                console.log("same");
            }
        });
     }
    
    }
  





