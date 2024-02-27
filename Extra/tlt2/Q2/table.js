/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/

/* DO NOT CHANGE THIS FUNCTION's NAME */

function display_default() {

    console.log("===[START] display_default() ===")


    // Part B
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH
    var url = "api/info.php"

    axios.get(url,{
        params: { //no need if dh

        }
    })

    .then (response => {
        console.log(response)
        let data = response.data.military_statistics //returns object

        var objKeys = Object.keys(data)
        
        populate(objKeys, data)
        // var d = 3
        // console.log(document.getElementById("tbody").innerHTML)
        // // var str = `<tr> <td>  hello ${d} </td> </tr>`
        // document.getElementById("tbody").innerHTML = `<tr> <td>  hello ${d} </td> </tr>`
        // console.log(document.getElementById("tbody").innerHTML)
        // console.log(document.getElementById("tbody").innerText)
        // document.getElementById("tbody").innerText = "goodbye"
        // console.log(document.getElementById("tbody").innerText)
        
    })

    .catch (error => {
        console.log(error.message)
    })

    console.log("===[END] display_default() ===")

}

function populate(objKeys, dataObj) {

    var tbody = document.getElementById("tbody")

    for (country of objKeys) { //use in to iterate index instead of key then no need new arr of keys

        var trow = document.createElement("tr")
        
        var countryNode = document.createTextNode(country)

        var leader = document.createTextNode(dataObj[country].head_of_state)

        // console.log(dataObj[country].personnel.total_population)
        var totPop = document.createTextNode(dataObj[country].personnel.total_population)
        
        var totFit4Serve = dataObj[country].personnel.total_fit_for_service
        var totPerson = dataObj[country].personnel.total_population
        var percFitNum = ((totFit4Serve/totPerson)*100).toFixed(1)
        var percFit = document.createTextNode(percFitNum)

        var nodeArr = [countryNode, leader, totPop, percFit]

        for (node of nodeArr) {
            var tdata = document.createElement("td")
            
            if (node == countryNode) {
                tdata.setAttribute("class", "fw-bold")
            }
            else if (node == percFit) {
                if (percFitNum < 30) {
                    tdata.setAttribute("class", "font-okay")
                }
                else if (percFitNum < 40) {
                    tdata.setAttribute("class", "font-omg")
                }
                else {
                    tdata.setAttribute("class", "font-holy-moly")
                }
            }

            tdata.appendChild(node)
            trow.appendChild(tdata)
        }

        tbody.appendChild(trow)

    }

    //or j use innerhtml fml

}

