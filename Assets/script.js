

        let weather = {
            apiKey: "a007514235a560857d19511e0b654c4c",
            fetchWeather: function (city) {
              fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                  city +
                  "&units=imperial&appid=" +
                  this.apiKey
              )
                .then((response) => {
                  if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                  }
                  return response.json();
                })
                .then((data) => this.displayWeather(data));
                
            },
            displayWeather: function (data) {
              const { name, dt } = data;
              const { icon, description } = data.weather[0];
              const { temp, humidity, feels_like, temp_min, temp_max  } = data.main;
              document.querySelector(".day").innerText= " Current day " +  dayjs.unix(dt).format("M-D-YYYY")
              document.querySelector(".city").innerText = "Weather in " + name;
              document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
              document.querySelector(".description").innerText = description;
              document.querySelector(".temp").innerText = temp + "°F";
              document.querySelector(".Feels_Like").innerText = "Feels Like " + feels_like + "°F";
              document.querySelector(".high").innerText = "High " + temp_max + "°F";
              document.querySelector(".low").innerText = "Low " + temp_min + "°F";
              document.querySelector(".humidity").innerText =
                "Humidity: " + humidity + "%";
            },
            search: function () {
              this.fetchWeather(document.querySelector(".search-bar").value);
            },
            };
        //   End of daily function
          document.querySelector(".search-btn").addEventListener("click", function () {
            weather.search(),
            Forecast.search();
          });
          
          document
            .querySelector(".search-bar")
            .addEventListener("keyup", function (event) {
              if (event.key == "Enter") {
                weather.search(),
                Forecast.search();
              }
            }); 
        //   end of calling daily function
          



        let Forecast = {
            apiKey: "a007514235a560857d19511e0b654c4c",
            fetchForecast: function (city) {
              fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q=" +
                  city +
                  "&units=imperial&appid=" +
                  this.apiKey
              )
                .then((response) => {
                  if (!response.ok) {
                    alert("No Forecast found.");
                    throw new Error("No Forecast found.");
                  }
                  return response.json();
                })
                .then((Data) => this.displayForecast(Data));
                
            },


            displayForecast: function (Data) {
              const { dt } = Data;
            //   const { icon, description } = data.weather.[0];
              const { temp, humidity, feels_like, temp_min, temp_max  } = Data.list.main;
               
                    for(i=0;i<5;i++){
                        console.log(temp)
                    document.querySelector(".day"+(i+1)).innerText = "Current Day" + dayjs.unix(dt[i]).format("M-D-YYYY")
                    
                }    
            }, 




            search: function () {
                this.fetchForecast(document.querySelector(".search-bar").value);
              },
            }

        