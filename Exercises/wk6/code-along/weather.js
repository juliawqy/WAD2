/*      
    1. Asynchronous HTTP Request
        - make HTTP requests to the endpoints (APIs) of backend server in the background
        - less data usage, faster and more interactive than Synchronous requests (HTML form submission)
    
    2. Possible types of data returned from API calls -- Text, JSON, XML (out of scope) 

    3. Axios -- a library for making Async. Requests
        Syntax: 
            // GET request
            let url = "......"
            axios.get(url, {
                params: {
                    name1 : value1,
                    name2 : value2
                }
            })
            .then(resp => {
                    // process response.data object
                    console.log(response.data)

                // process error object
            })
            .catch()

            // POST request
            axios.post(url, {
                name1 : value1,
                name2 : value2
            })
            .then(response => {
                // process response.data object
            })
            .catch(error => {
                // process error object
            })

    
    3. JSON 
         - JSON is similar to JS Obj but some differences 
            - in JSON, names are double-quoted; Cannot use single quotes for strings
            - in JS, names can be strings, numbers, or identifier names: { name: "John" })
            - in JSON, values must be of null, string, number, Boolean, object, array
            - in JS, values can be of the above plus methods, etc.

        - JSON Syntax: 
            {   "name" : value, 
                "name" : { "name" : value }, 
                "name" : [ value, {}, [], ... ]
            }

        e.g.
            {   "name": "Mary",
                "age":  26,
                "spouse" : { "name" : "John", "age": 27 }
                "hobby":["swimming","badminton"],
                "isMarried":true
            }


        - How to process JSON data received from API calls,
            - first need to conver JSON data to JS object
                JSON.parse() : covert JSON to JS obj
                JSON.stringify() : convert JS to JSON

            - then can process the data just like how you process JS object

            - Note: when we use Axios, it internally performs JSON.parse() 
                    and assign the resulting JS object to response.data
                    Hence, response.data is already a JS object (no need converting)
           

        
    x. use of backtick `` for breaking the string into multi-lines
    x. encodeURI(url) : for treating special characters such as space, slash / that have syntactic meaning to URL
            https://www.w3schools.com/jsref/jsref_encodeURI.asp
*/ 

/*
    Task: Add Code to 
        - listen to button click event and enter key press event
        - get the city entered by the user
        - make Axios request to Weather API and get the weather info of the given city
        - display the weather description
*/


// Weather API doc: https://openweathermap.org/current
// endpoint: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var key = "5e71d594a17c0495216f843da601544e"
var url = "https://api.openweathermap.org/data/2.5/weather"
var btnEle = document.getElementById("weatherBtn")
var inputEle = document.getElementById("city")
var dataEle = document.getElementById("data")
var alertEle = document.getElementById("nodata")

