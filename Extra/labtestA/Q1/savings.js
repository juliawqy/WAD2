/*
    
Name:   
Email:  

*/

function calculate () {
     
     // YOUR CODE GOES HERE

     document.getElementById("result").style.display = "inline"
     
     // var result =  document.getElementById("result")
     // result.setAttribute("style", "display: inline")

     var amt = parseFloat(document.getElementById("amt").value)
     var interest = parseFloat(document.getElementById("interest").value)
     var goal = parseFloat(document.getElementById("goal").value)

     var interestRate = (interest/100)+1
     // var interestRate = (parseInt(interest)+100)/100 USE PARSEFLAOT

     
     console.log(interest)

     var counter = 0

     console.log(amt, goal, amt<goal)

     while (amt < goal) {
          counter += 1
          amt = amt*interestRate
          console.log(interestRate)
          console.log(amt)
     }

     if (isNaN(amt) && isNaN(interest) && isNaN(goal)) {
          amt = 0.00
     }

     else if (isNaN(amt) || isNaN(interest) || isNaN(goal)) {
          counter = "-"
          amt = 0.00
     }

     document.getElementById("years").innerText = counter
     document.getElementById("total").innerText = amt.toFixed(2)
       
}