/*

 Name: 
 Email: 

*/

// Part A
function get_level(str) {
    
    // YOUR CODE GOES HERE
    height = 0
    for (ch of str) {
        if (ch == "D") {
            height -= 1
        }
        if (ch == "U") {
            height += 1
        }
    }

    return height
    // console.log(height)

}


// Part B
function count_valleys() {
    
    // YOUR CODE GOES HERE

    str = document.getElementById("path").value

    if (get_level(str) > 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still on mountain!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else if (get_level(str) < 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still in valley!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else {

        document.getElementById("errorbox").innerText = ""

        count = 0
        height = 0
        countD = 0
        countU = 0
        type = ""

        for (ch of str) {

            if (type == "v" && height == 0) {
                count += 1
            }

            if (ch == "D") {
                countD += 1
                height -= 1
            }
            if (ch == "U") {
                countU += 1
                height += 1
            }
            if (height < 0) {
                type = "v"
            }
            if (height > 0) {
                type = "m"
            }
        }

        if (type == "v" && height == 0) {
            count += 1
        }

        // console.log("ans: " + count)

        document.getElementById("result").innerText = `Number of Valleys: ${count}`

    }

    

}

// count_valleys("DDUUU")
// count_valleys("DDDDUUU")
// count_valleys("DDDUUUDDUU")


// Part C
function count_mountains() {
    
    // YOUR CODE GOES HERE

    str = document.getElementById("path").value

    if (get_level(str) > 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still on mountain!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else if (get_level(str) < 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still in valley!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else {

        document.getElementById("errorbox").innerText = ""

        count = 0
        height = 0
        countD = 0
        countU = 0
        type = ""

        for (ch of str) {

            if (type == "m" && height == 0) {
                count += 1
            }

            if (ch == "D") {
                countD += 1
                height -= 1
            }
            if (ch == "U") {
                countU += 1
                height += 1
            }
            if (height < 0) {
                type = "v"
            }
            if (height > 0) {
                type = "m"
            }
        }

        if (type == "m" && height == 0) {
            count += 1
        }

        // console.log("ans: " + count)
        document.getElementById("result").innerText = `Number of Mountains: ${count}`
    }

}

// count_mountains("UUUDDD")
// count_mountains("UUUUDDD")
// count_mountains("UUUDDDUUDD")


// Part D
// Feel free to add additional functions




// Part E
function print_path() {
    
    // YOUR CODE GOES HERE

    str = document.getElementById("path").value

    if (get_level(str) > 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still on mountain!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else if (get_level(str) < 0) {
        document.getElementById("errorbox").innerText = "Invalid path! Hiker still in valley!"
        document.getElementById("showPath").innerText = ""
        document.getElementById("result").innerText = ""
    }

    else {

        document.getElementById("errorbox").innerText = ""

        var height = 0
        var mapped_height = {}

        for (index in str) {
            if (str[index] == "S") {
                mapped_height[0] = "S"
            }
            if (str[index] == "D") {
                height -= 1
                if (!(height in mapped_height)) {
                    var tempStr = ""
                    for (let i = 0; i < index; i++) {
                        tempStr += "&nbsp;&nbsp;"
                        // tempStr += " "
                    }
                    mapped_height[height] = tempStr
                }
                mapped_height[height] += str[index]
                for (otherHeights of Object.keys(mapped_height)) {
                    if (otherHeights != height) {
                        mapped_height[otherHeights] += "&nbsp;&nbsp;"
                        // mapped_height[otherHeights] += " "
                    }
                }
            }
            if (str[index] == "U") {
                height += 1
                if (!(height in mapped_height)) {
                    tempStr = ""
                    for (let i = 0; i < index; i++) {
                        tempStr += "&nbsp;&nbsp;"
                        // tempStr += " "
                    }
                    mapped_height[height] = tempStr
                }
                mapped_height[height] += str[index]
                for (otherHeights of Object.keys(mapped_height)) {
                    if (otherHeights != height) {
                        mapped_height[otherHeights] += "&nbsp;&nbsp;"
                        // mapped_height[otherHeights] += " "
                    }
                }
            }
        }

        var keys = Object.keys(mapped_height)
        keys.sort(function(a,b){return a - b})
        console.log(keys)

        resultStr = ""
        for (let j = keys.length - 1; j >= 0; j--) {
            console.log(mapped_height[keys[j]])
            resultStr += mapped_height[keys[j]] + "<br>"
        }

        document.getElementById("showPath").innerHTML = resultStr

    }

    // console.log(mapped_height)

}

// print_path("SDDDUUU")
// print_path("SDDUUDDDUUU")
// print_path("SDDUUUUDD")
// print_path("SDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUUDDUUUDDDUUUUUUUDDDDDDDDDDUUUUU")