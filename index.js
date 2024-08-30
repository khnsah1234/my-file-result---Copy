function getweather(){
    let pickcityname = document.getElementById("city1").value;
    axios.get('https://api.weatherapi.com/v1/current.json?key=4c9ad38d3792432c9e083559242708&q=${pickcityname}e&aqi=yes')
    .then(function (response) {
        // handle success
        console.log(response);
        let weather = response.data
        // handle success
        console.log(Weather)
        document.getElementById("change").innerHTML=('today ${cityName} temp in celcius ${Weather.current.temp_c}')
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}