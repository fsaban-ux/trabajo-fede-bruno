let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let tag= queryStringObj.get("tag");

let productosdiv = document.querySelector (".seccion")


fetch (`https://dummyjson.com/products/category/${tag}`)
    .then(function (response) {
        return response.json ();
    })
    .then (function (data) {
        console.log (data)
        let productos = data.products 

            for (let i = 0; i < productos.length; i++) {

              productsdiv.innerHTML += `<article class="articulobotin">
          <img src=${productos[i].thumbnail} alt="Botin2A"> Botin predator
         <p class="titulos">${productos[i].title}</p>
      <p class="precio">${productos[i].price}</p>
      <button class="vermas"><a href="./product.html?id=${productos[i].id}">Ver mas</a></button>
        </article>`
            
        }
    }
)