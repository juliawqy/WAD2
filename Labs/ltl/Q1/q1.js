/*
	Name: Wong Qian Yu
	Email: qianyu.wong.2022

	q1.js

	Acknowledgement: 
	This code is adapted from https://www.geeksforgeeks.org/javascript-calculator 
*/

var prevVal = ""
var solveTriggered = false

// Function that displays value 
function dis(val) { 
	document.getElementById("result").value += val 
} 

function myFunction(event) { 
	if (event.key == '0' || event.key == '1' 
		|| event.key == '2' || event.key == '3' 
		|| event.key == '4' || event.key == '5' 
		|| event.key == '6' || event.key == '7' 
		|| event.key == '8' || event.key == '9' 
		|| event.key == '+' || event.key == '-' 
		|| event.key == '*' || event.key == '/') 
		document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
	if (event.keyCode === 13) { 
		let x = document.getElementById("result").value 
		solve(); 
	} 
} 

// Function that evaluates the digit and return result 
function solve() { 
	solveTriggered = true
	let x = document.getElementById("result").value
	prevVal = x
	console.log(document.getElementById("result").value)
	console.log("solve: " + prevVal)
	if (x!=""){
		let y = math.evaluate(x) 
		document.getElementById("result").value = y
	}
} 

// Function that clears the display 
function clr() { 
	document.getElementById("result").value = "" 
} 

// you may insert new functions or edit any function above.

function onPi() {
	document.getElementById("result").value += "3.14"
}

function onBkSpace() {
	var currentStr = document.getElementById("result").value

	if (currentStr.length != 0) {
		var newStr = currentStr.slice(0,(currentStr.length)-1)
		document.getElementById("result").value = newStr
	}
	
}

function onUndo() {
	console.log(prevVal)
	if (solveTriggered) {
		document.getElementById("result").value = prevVal
	}
}
