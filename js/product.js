let imagen = document.querySelector("#jsimg")
let titulo = document.querySelector("#jstitulo")
let rating = document.querySelector("#jsrating")
let desc = document.querySelector("#desc")
let precio = document.querySelector("#precio")

let querySelector = location.search;
console.log(querySelector);
let urlparams= new URLSearchParams(queryString);
let productId = urlparams.get("id");

let api = `https://dummyjson.com/products/category/sports-accesories/${productoId}`


fetch(api)  
    .then(function (response) {
        return response.json();
    })

    .then(function(data) {
    let productos = data.products 
    console.log(productos.id)
    })
    .catch()

