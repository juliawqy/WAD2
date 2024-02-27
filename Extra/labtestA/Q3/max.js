/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2020

*/


function get_max(url1, url2, ele_id) {
    /*
    Assume list1 and list2 are the lists obtained from url1 and url2
    the output to be displayed in HTML element with id ele_id
        url1 + " : " + JSON.stringify(list1) + "<br>" +
        url2 + " : " + JSON.stringify(list2) + "<br>" +
        "max : " + max
    
    For failed AJAX calls, assuming url1 fails
        url1 + "<br>" + error;
    */

    // YOUR CODE GOES HERE: START

    axios.get(url1)

    .then(response => {
        console.log("data1", response.data)
        var data1 = response.data

        axios.get(url2)

        .then(response2 => {
            var data2 = response2.data
            console.log("data2", data2)

            var combined = []

            for (elem1 of data1) {
                if (typeof(elem1) === "number") {
                    combined.push(elem1)                
                }
            }

            for (elem2 of data2) {
                if (typeof(elem2) === "number") {
                    combined.push(elem2)                
                }
            }

            console.log(combined)

            function getMaxOfArray(numArray) {
                return Math.max.apply(null, numArray);
            }

            if (combined.length === 0) {
                var maxNum = "No number"
            }
            else {
                var maxNum = getMaxOfArray(combined)
            }

            console.log(maxNum)

            result = document.getElementById(ele_id)
            result.innerHTML = `
            <p> 
                ${url1} : ${JSON.stringify(data1)} <br>
                ${url2} : ${JSON.stringify(data2)} <br>
                Max : ${maxNum}
            </p>
            `
            
        })

        .catch(error => {
            console.log(error.message)
            var error2 = error
            result = document.getElementById(ele_id)
            result.innerHTML = `
            <p> 
                ${url2} <br>
                ${error2}
            </p>
            `
        })
        

    })
    .catch(error => {
        console.log(error.message)
        console.log(error)
        var error1 = error
        result = document.getElementById(ele_id)
        result.innerHTML = `
        <p> 
            ${url1} <br>
            ${error1}
        </p>
        `

    })

    // YOUR CODE GOES HERE: END
}
