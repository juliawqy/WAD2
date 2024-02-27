/*
    NAME: Wong Qian Yu
	EMAIL: qianyu.wong.2022
*/
var url1 = "sales1.json"
var url2 = "sales2.json"


function mergeSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE

    let authorSales = {} 

    axios.get(url1)
    .then((response) => {
        // retrieve sales from sales
        console.log(response)
        let sales = response.data;
        console.log(sales)
    
        for(let item of sales.books) {  
            if(item.author in  authorSales) { 
                authorSales[item.author] += item.sales 
            } else {
                authorSales[item.author] = item.sales
            }
        }
    console.log(authorSales)
    })
     
    

    axios.get(url2)
    .then((response) => {
        // retrieve sales from sales
        let sales = response.data;
        console.log(sales)
    
        for(let item of sales.books) {  
            if(item.author in  authorSales) { 
                authorSales[item.author] += item.sales 
            } else {
                authorSales[item.author] = item.sales
            }
        }
    
        console.log(authorSales)   
        for(let author in authorSales) {
            let x = { "author": author, "sales": authorSales[author] }
            data.push(x)
            console.log(x)
        }
    
        console.log(data)   
        display(elem, data, title)
    })
    
}

function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE

    let authorSales = {} 

    axios.get(url1)
    .then((response) => {
        // retrieve sales from sales
        console.log(response)
        let sales = response.data;
        console.log(sales)
    
        for(let item of sales.books) {  
            if(item.author in  authorSales) { 
                authorSales[item.author] += item.sales 
            } else {
                authorSales[item.author] = item.sales
            }
        }
    console.log(authorSales)
    })
    

    axios.get(url2)
    .then((response) => {
        // retrieve sales from sales
        let sales = response.data;
        console.log(sales)
    
        for(let item of sales.books) {  
            if(item.author in  authorSales) { 
                authorSales[item.author] += item.sales 
            } else {
                authorSales[item.author] = item.sales
            }
        }
    
        console.log(authorSales)   
        for(let author in authorSales) {
            let x = { "author": author, "sales": authorSales[author] }
            if (authorSales[author] >= 5) {
                data.push(x)
            }
            console.log(x)
        }
    
        data.sort().reverse()
        console.log(data)   
        display(elem, data, title)
    
    })
     
}