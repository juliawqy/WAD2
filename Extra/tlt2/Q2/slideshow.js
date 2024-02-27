/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/


/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part A
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH

    var url = "api/info.php"

    axios.get(url,{
        params: {

        }
    })

    .then (response => {
        console.log(response)
        let data = response.data.military_statistics //returns object
        
        var objKeys = Object.keys(data)
        console.log(objKeys)
        
        populate(objKeys, data)

        
    })

    .catch (error => {
        console.log(error.message)
    })

    
    console.log("===[END] display_default() ===")

}


function populate(objKeys, dataObj) {
    var carouBlock = document.getElementById("carou")

    for (country of objKeys) {
        console.log(country)
        console.log(dataObj[country])

        var carouItemDiv = document.createElement("div")
        carouItemDiv.setAttribute("class", "carousel-item")
        if (objKeys.indexOf(country) == 0) {
            carouItemDiv.setAttribute("class", "carousel-item active")
        }
        carouItemDiv.setAttribute("data-bs-interval", "2000")

        var img = document.createElement("img")
        img.setAttribute("style", "display: block; width: 100%;")
        img.setAttribute("src", dataObj[country].flag_relative_url)

        var carouCaptionDiv = document.createElement("div")
        carouCaptionDiv.setAttribute("class", "carousel-caption")

        var carouHeader = document.createElement("h5")
        var countryName = document.createTextNode(country)
        carouHeader.appendChild(countryName)

        var carouCaption = document.createElement("p")
        var countryLeader = document.createTextNode(dataObj[country].head_of_state)
        carouCaption.appendChild(countryLeader)

        carouCaptionDiv.appendChild(carouHeader)
        carouCaptionDiv.appendChild(carouCaption)

        carouItemDiv.appendChild(img)
        carouItemDiv.appendChild(carouCaptionDiv)       

        carouBlock.appendChild(carouItemDiv)

    }

    // <div class="carousel-item active">
    //     <img src="./img/1.jpg" class="d-block w-100" alt="...">
    //     <div class="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //     </div>
    // </div>

    // <div class="carousel-item">
    //     <img src="./img/2.jpg" class="d-block w-100" alt="...">
    //     <div class="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //     </div>
    // </div>

}