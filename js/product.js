
let seccionProducto = document.querySelector(".color_letra")
let seccionComments = document.querySelector(".divComments")

let queryString = location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get("id");

let api =`https://dummyjson.com/products/${productoId}`


fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        seccionProducto.innerHTML = `


        <div class="contenedor"> 
        <article class="Informacion-botin">
            <img id="jsimg" class="imagen-producto" src="${data.thumbnail}" alt="Botin1">
        </article>

        <article class="Informacion-botin">
            <h1 id="jstitulo" class="Nombre-botin">${data.title}</h1>
            <p id="jsrating" class="valoraciones">${data.title}</p>
            <p id="jsdesc" class="Descripcion">${data.description}</p>
        </article>
        </div>
         <div class="contenedor2"> 
        <article class="Precio">
            <p id="jsprecio" class="precio2">${data.price}</p>
            <p class="Categoria">${data.cateogry}</p>
            <p class="stock">${data.stock}</p>
            <p class="nro"> ID de producto: ${data.id}</p>
           </div>
        </article>
    </div>
    `
for(let i = 0; i<data.reviews.lenght; i++){
    seccionComments.innerHTML += `
        <section class= "comments">
    <p>${data.reviews[i].rating}</p>
    <p>${data.reviews[i].comment}</p>
    <p>${data.reviews[i].reviewName}</p>
    <p>${data.reviews[i].date}</p>
    </section>
    `
}


})
.catch()



























  