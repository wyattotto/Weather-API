const loadIn = {
    Load() {
     document
        .getElementById('btnGo') 
        .addEventListener('click', app.GetWeather);  
    },

    GetWeather(){
        let city = document.getElementById('city').value;
        let lang = 'en';
        let units = 'Imperial'
        let key ='a007514235a560857d19511e0b654c4c'
        let url ='http://api.openweathermap.org/geo/1.0/direct?q=cityname=${city}&limit={limit}&appid=${key}&units=${units}&lang=${lang}' 
    
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
    },
    showWeather(response){
        console.log(response);
        let row = document.querySelector('.weather .row')
        
    }

}