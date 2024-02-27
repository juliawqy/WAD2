
var cities = ["Singapore", "Tokyo", "Hanoi", "Jakarta", "Bangkok"];
var idx = -1;
getWeather();
setInterval(getWeather, 5000);

function getWeather() {
    if (idx >= 4) 
        idx = -1;
    idx++;
    let city = cities[idx];
    console.log(city);
    var data = "Feeling Good!";
    var myapikey = "YOUR OWN API KEY"
    var url = "https://api.openweathermap.org/data/2.5/weather"

    // get weather json data
    axios.get(url, {
                params: {
                    q : city,
                    APPID : myapikey
                }
            })
            .then(response =>  {
                console.log(response.data)
                data = computedata(response.data, city);
                document.getElementById("intro").innerText = data;
                
            })
            .catch(error => {
                console.log(error.message)
                // return null if there is exception/error
                data = "Invalid Input or No data found!";
            }); 
}

function computedata(obj, city) {
    // note: some data are float/int type, need to use repr() or str() to convert to string type
    // weather is a property of PHP object, which is an array
    var desc = obj.weather[0].description;
    var temp = obj.main.temp;
    temp = convert(temp); // convert to celsius
    var humid = obj.main.humidity;
    var wind = obj.wind.speed;

    /* weather object
    # weather = obj['weather'][0]

    # output some object attributes
    # print("Weather: " + weather['main'] + " " + weather['description'])

    # create data according to our application requirement
    # data = "Weather: " + weather['main'] + " " + weather['description']
    */

    var data = "Weather in " + city + 
            ": The temperature is " +
            temp + " degree celsius. The humidity is " +
            humid + "%. The wind speed is " +
            wind + " meter/sec.";
    
    return data;
}

function convert(kel) {
    // conver from kelvin to celsius 
    // and round to 2 decimal places
    var cel = Math.round(kel - 273.15,2);
    return cel;
}
