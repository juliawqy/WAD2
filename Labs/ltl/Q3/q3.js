// Name: Wong Qian Yu
// Email: qianyu.wong.2022

// DO NOT MODIFY
const riceBasePrice = 12
const milkBasePrice = 5
const oilBasePrice = 8
// END 

function addToCart() {
    var groceryItem = document.getElementById('groceryItem');
    var quantity = document.getElementById('quantity');

    if (groceryItem.validity.valid && quantity.validity.valid && quantity.value > 0) {
        var selectedOption = groceryItem.options[groceryItem.selectedIndex];
        var price = selectedOption.getAttribute('data-price');
        var subtotal = quantity.value * price;

        // Part B - To complete code for add item feature
        
        var cart = document.getElementById("cart")

        if (document.getElementById(selectedOption.value)) {
            console.log("alr have")
            console.log(document.getElementById(selectedOption.value).innerHTML)
            var currentVal = document.getElementById(selectedOption.value).innerHTML
            currentVal = currentVal.split(": ")
            console.log(currentVal)
            newQuantity = parseInt(currentVal[1].split(",")[0]) + parseInt(quantity.value)
            document.getElementById(selectedOption.value).innerHTML = `
                ${selectedOption.value} - Quantity: ${newQuantity}, Subtotal: $${parseInt(newQuantity)*price} 
                <button class="btn btn-danger ms-2" onclick="del(${selectedOption.value})"> Delete Item </button>
            `
            document.createElement("div")

        }
        else {


            cart.innerHTML += `
            <div id="${selectedOption.value}"> 
                ${selectedOption.value} - Quantity: ${quantity.value}, Subtotal: $${subtotal}
                <button class="btn btn-danger ms-2" onclick="del('${selectedOption.value}')"> Delete Item </button>
            </div> 
        `
        }
        
        
        // End of Part B

        // Part C - To complete code for delete button
        
        
        
        // End of Part C

        // Reset the form
        document.getElementById('groceryForm').reset();
    }
}

function del(item) {
    document.getElementById(item).remove()
}

function showFinalDetails() {
    // Part D - To complete code for showFinalDetails()
    

    
    // End of Part D
} 