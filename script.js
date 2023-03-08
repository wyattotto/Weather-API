// const loadIn = {
//     Load() {
//      document
//         .getElementById('btnGo') 
//         .addEventListener('click',GetWeather());  
//     },
// }

//     var city = document.getElementById('city').value;
//     var lang = 'en';
//     var units = 'Imperial'
//     var key ='a007514235a560857d19511e0b654c4c'
//     var url =`http://api.openweathermap.org/geo/1.0/direct?q=city=${city}&appid=${key}&units=${units}&lang=${lang}`

// document.getElementById('btnGo').addEventListener("click", function(){
//     fetch(url)
//     .then(res => res.json())
//     .catch(err => alert("Invalid"))
//     console.log(res.json())

// })



function  GetWeather () {
    let city = document.getElementById('city').value;
    let lang = 'en';
    let units = 'Imperial'
    let key ='a007514235a560857d19511e0b654c4c'
    let url =`http://api.openweathermap.org/geo/1.0/direct?q=city=${city}&appid=${key}&units=${units}&lang=${lang}`

    fetch(url)
        .then((response) =>{
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
            .then((data) =>{
                app.showWeather(data)
            })
            .catch(console.err)
            console.log(response)
}

// GetWeather(response);{
//     console.log(response);
    
    
// }
