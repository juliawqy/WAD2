function display_default() {

    var url = "api/info.php"
    axios.get(url)

    .then( response=> {
        var data = response.data.military_statistics //return obj as in info.php

        var dataKeys = Object.keys(data)

        // var tbody = document.getElementById("tbody").innerHTML

        for (country of dataKeys) {

            var totPop = data[country].personnel.total_population 
            var fit4Serve = data[country].personnel.total_fit_for_service
            var percServe = ((fit4Serve/totPop)*100).toFixed(1)

            var str = 
            
            `<tr>
                <th> ${country} </th>
                <td> ${data[country].head_of_state} </td>
                <td> ${totPop} </td>
                <td> ${percServe} </td>
            </tr>`

            document.getElementById("tbody").innerHTML += str
        }


    })

    .catch (error => {
        console.log(error.message)
    })

}