document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault();
    const id = "6637ac61cd710c6d04d79e055c9e877a";
    let city = document.querySelector(".search-box").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`;
    fetch(url).then(i=>{
        if(!i.ok){
            document.querySelector(".error").style.display = "block";
            document.body.style.background = "Red";
            document.querySelector(".weather").style.display = "none";
        }
        return i.json()
    })
    .then(i =>{
        document.querySelector(".temp").innerHTML=`${((i.main.temp)-273.15).toFixed(1)} °C`;
        document.querySelector(".city").innerHTML=`Weather in ${i.name}` ;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${i.weather[0].icon}.png`;
        document.querySelector(".description").innerHTML=`${i.weather[0].description}`;
        document.querySelector(".humidity").innerHTML= `Humidity :  ${i.main.humidity}%`;
        document.querySelector(".wind").innerHTML= `Wind Speed :  ${i.wind.speed}m/s`;
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${city})`;
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        console.log(i);
    })
 })