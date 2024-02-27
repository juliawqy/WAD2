/*
    
Name:   
Email:  

*/


// YOUR CODE GOES HERE


function showWinners() {

    axios.get("krazyoscars/winner/read.php")

    
    .then(response => {

        console.log(response.data.records)

        records = response.data.records


        //for dropdown menu

        var years = {}

        for(index in records) {
            console.log(records[index].movie.year.slice(0,3))
            decade = records[index].movie.year.slice(0,3)
            if (years[decade] == null) {
                years[decade] = 0
            }
            years[decade] += 1
        }

        console.log(years)

        dropdownList = document.getElementById("decadeList")
        // dropdownList.style.display = "flex"
        dropdownList.innerHTML = ""

        for (yearIndex in years) {
            item = document.createElement("button")
            item.type = "button"
            item.className = "dropdown-item"
            item.setAttribute("onclick", `filterWinners(${yearIndex})`)
            item.textContent = yearIndex + "0 "
            count = document.createElement("span")
            count.className = "bg-warning rounded-pill badge text-black"
            count.textContent = years[yearIndex]
            // item.appendChild(year)
            item.appendChild(count)
            dropdownList.appendChild(item)
        }


        //show bg cards

        str = ""

        for(index in records) {
            var name = records[index].bio.name
            var movie = records[index].movie.title
            var year = records[index].movie.year
            var desc = records[index].movie.description
            var pic = records[index].others.image

            str += `
                <div class="col">
                    <div class="card">
                        <img src="krazyoscars/images/${pic}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${name}
                            </h5>
                            <p class="card-text">
                                <b>
                                    ${movie} (${year})
                                </b>
                                <i>
                                    ${desc}
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            `

        }

        document.getElementById("winners").innerHTML = str

    })

}

function filterWinners(decade) {
    console.log("working")

    axios.get("krazyoscars/winner/read.php")

    
    .then(response => {

        console.log(response.data.records)

        records = response.data.records

        str = ""

        for(index in records) {
            var name = records[index].bio.name
            var movie = records[index].movie.title
            var year = records[index].movie.year
            var desc = records[index].movie.description
            var pic = records[index].others.image

            if (year.includes(decade)) {

                str += `
                    <div class="col">
                        <div class="card">
                            <img src="krazyoscars/images/${pic}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ${name}
                                </h5>
                                <p class="card-text">
                                    <b>
                                        ${movie} (${year})
                                    </b>
                                    <i>
                                        ${desc}
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                `
            
            }

        }

        document.getElementById("winners").innerHTML = str

    })

    console.log(document.getElementById("winners"))
    console.log(typeof(document.getElementById("winners")))

}


