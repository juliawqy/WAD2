// Add Task 1 Code Below
var x = document.getElementById("fname")
console.log(x)
x.value = x.value.toUpperCase()

function foo(event) {
    var x = document.getElementById("fname") //obj
    console.log(x)
    x.value = x.value.toUpperCase()
}


// Add Task 2 Code Below
var y = document.getElementById("lname")
y.addEventListener("change", foo2) //not onchange (wont work), not "foo2" (not a str, but as function variable)

function foo2() {
    console.log(y)
    y.value = y.value.toUpperCase()
}

// Add Task 3 Code Below
//long winded way, can also use getElementById or getElementsByClass
var i = document.getElementsByClassName("row")[1]
console.log(i)
var children = i.children
for (var child of children) {
    console.log(child)
}
var grandchildren = child.children[2]
console.log(grandchildren)

grandchildren.addEventListener("click", function() {
    alert("'@' must be present")
})





// Add Task 4 Code Below
// Check out the difference between focus & click
var textElem = document.getElementsByTagName("textarea")[0]

textElem.addEventListener("click", changeBackground)

function changeBackground() {
    textElem.style.backgroundColor = "gray"
}


// Add Task 5 Code Below
var timeslot = document.getElementsByClassName("timeslot")[0]
console.log(timeslot)
var selElem = timeslot.children[0].children[1]
console.log(selElem)
selElem.addEventListener("change", () => selElem.style.fontWeight = "bold")


// Add Task 6 & 7 Code Below
var checkboxes = document.getElementsByName("color")
console.log(checkboxes)

var divElem = document.getElementsByClassName("choosecolor")[0] //without index is an array not element

for (let cb of checkboxes) {
    cb.addEventListener("click", function(event) {
        console.log(event) //event is an object
        console.log(event.target) //the elements on which the event occurs
        console.log(event.target.value)

        //JS naming convention is lower camelCase
        document.body.style.backgroundColor = event.target.value

        var node = document.createElement("p")
        var content = document.createTextNode(event.target.value + " is checked") //appending text node as child, need to find parent div
        node.appendChild(content)
        divElem.appendChild(node)

        //alternative way using innterHTML
        // divElem.innerHTML += `<p> ${event.target.value} is checked! </p>`

        console.log(event.target.parentNode)
        event.target.parentNode.remove()

    })
}






// Add Task 8 Code Below
function validateForm(event) {
    var error = ""
    var frm = event.target 
    // var frm = document.forms["frm"] // this also works
   
    // Add Code Below
    var uname = frm["uname"] //element, not a value
    var email = frm["email"]

    if (uname.value.length < 10) {
        error += "uname must be > 10 characters"
    }

    if (!email.includes('@')) {
        error += "email must contain '@' character"
    }

    if (error != "") {
        return False
    }

    // check out what the following code does 
    // event.preventDefault()
   
    return true

}








