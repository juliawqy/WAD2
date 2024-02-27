/*
    
Name:   
Email:  

*/

// DO NOT MODIFY THIS ARRAY
const shopList = [
    { "item": "bread", "price": 1.60 },
    { "item": "milk", "price": 2.95 },
    { "item": "butter", "price": 3.50 },
    { "item": "vegetable", "price": 5.80 },
    { "item": "coffee", "price": 3.60 },
    { "item": "tea", "price": 6.50 },
    { "item": "apple", "price": 0.85 }
];

function addItem() {

    // YOUR CODE GOES HERE

    var item = document.getElementById("item").value
    if (item == "") {
        document.getElementById("item").placeholder = "Aiyo! Enter item name!"
        return
    }
    else {
        document.getElementById("item").placeholder = "Enter item name"
    }

    counter = 0
    for (shopItem of shopList) {
        if (shopItem.item == item) {
            counter += 1
        }
    }
    if (counter == 0) {
        document.getElementById("item").value = ""
        document.getElementById("item").placeholder = "Sorry! Don't have it!"
        return
    }
    else {
        document.getElementById("item").placeholder = "Enter item name"
    }

    var result = document.getElementById("itemList")

    result.innerHTML += `<li class="py-1"> <input type="checkbox" name="groceryItems" id="${item}"> <label for="${item}"> ${item} </label> </li>`
    
    document.getElementById("item").value = ""

}

function processItems() {

    // YOUR CODE GOES HERE

    var itemsList = document.getElementById("itemPrice")
    var selectedItems = []
    itemsList.innerHTML = ""

    var groceryItems = document.getElementsByName("groceryItems")
    console.log(groceryItems)

    counter = 0
    for (groceryItem of groceryItems) {
        if (groceryItem.checked == true) {
            console.log(groceryItem)
            selectedItems.push(groceryItem.id)
            counter += 1
        }
    }

    if (counter == 0) {
        document.getElementById("alert").style.display = "flex"
        return
    }
    else {
        document.getElementById("alert").style.display = "none"
    }

    console.log(selectedItems)

    var totalPrice = 0

    for (items of selectedItems) {
        for (shopItem of shopList) {
            if (shopItem.item == items) {
                itemsList.innerHTML += `${items} - $${shopItem.price.toFixed(2)} <br>`
                totalPrice += shopItem.price
            }
        }
    }

    itemsList.innerHTML += `<br> The total cost is : $${totalPrice.toFixed(2)}`

}
