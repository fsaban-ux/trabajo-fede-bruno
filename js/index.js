let api = "https://dummyjson.com/products/category/sports-accesories"
let productsdiv = document.querySelector("#productojava")

fetch(api)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos)

        for (let i = 0; i < productos.lenght; i++)
             productsdiv.innerHTML += `<article class="articulobotin"> 
            <img src= ${productos [i].thumbnail} alt="Botin2A"> Botin Predator
            <p class="titulos"> ${productos [i].title}</p>
          <p class="precio"> ${productos [i].price}</p>
          <button class="vermas" ><a href="./product.html?id=${prouctos[i].id}">Ver mas</a></button>
          </article>`

    }
    )
    .catch()
    



<div class= "seccion" id="productojava">





<div class= "seccion" id="prudctojava"></div>