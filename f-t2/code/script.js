const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const apikey = "3265f9035977827aa13a0e631144de67"
const searchinput = document.querySelector("header input")
const searchbtn = document.querySelector("header img")

    async function weather(city) {
        
        const response = await fetch(url + `&q=${city}` + `&appid=${apikey}`)
        let data = await response.json();
        console.log(data)
        let maintemp = data.main.temp
        let mintemp = data.main.temp_min
        let maxtemp = data.main.temp_max
        document.querySelector(".main__celc").addEventListener("click", () => {
            document.querySelector(".main__temperature").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°c";
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°c";
        })

        document.querySelector(".main__ferh").addEventListener("click", () => {
            document.querySelector(".main__temperature").innerHTML = Math.round((data.main.temp * 1.8) + 32) + "°F";
            document.querySelector(".min").innerHTML = Math.round((data.main.temp_min * 1.8) + 32) + "°F";
            document.querySelector(".max").innerHTML = Math.round((data.main.temp_max * 1.8) + 32) + "°F";
        })

        const img=data.weather[0].main
        if(img=="Clouds"){
            document.querySelector(".main__temp img").src="clouds.png"
        }
        else if(img=="Clear"){
            document.querySelector(".main__temp img").src="clear.png"
        }
        else if(img=="Drizzle"){
            document.querySelector(".main__temp img").src="drizzle.png"
        }
        else if(img=="Mist"){
            document.querySelector(".main__temp img").src="mist.png"
        }
        else if(img=="Rain"){
            document.querySelector(".main__temp img").src="rain.png"
        }
        else if(img=="Snow"){
            document.querySelector(".main__temp img").src="snow.png"
        }
        else if(img=="Wind"){
            document.querySelector(".main__temp img").src="wind.png"
        }

        document.querySelector(".main__city").innerHTML = data.name;
        document.querySelector(".main__temperature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°c";
        document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°c";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    }
searchbtn.addEventListener("click", () => {
    weather(searchinput.value);
    searchinput.value = "";
})
