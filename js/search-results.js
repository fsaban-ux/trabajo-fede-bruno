let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get("busqueda");

let seccion = document.querySelector(".seccion");
let seccionTerminoBuscado = document.querySelector(".color_marcas2");
let BusquedaVacia = document.querySelector(".busquedaVacia");


seccionTerminoBuscado.innerHTML += `Resultados de busqueda: ${terminoBuscado}`


fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data)
        let productos = data.productos

        if (productos.lenght == 0) {
            BusquedaVacia.innerHTML += `No se encontraron resultados similares a ${terminoBuscado}`
        } else {
            for (let i = 0; i < productos.lenght; i++) {
            seccion.innerHTML += `
                   <article class="articulobotin">
        <img src=${productos[i].thumbnail} alt="Botin2A"> Botin Predator
          <p class="titulos">${productos[i].title}</p>
    <p class= "precio">${productos[i].title}</p>
    <button class="vermas"><a href="./product.html?id=${productos[i].id}"> Ver mas</a> </button>
      </article>`
            }
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    }
    );


let formulario = document.querySelector("formSearch")
let campoBusqueda = document.querySelector("inputSearch")
let errorBusqueda = document.querySelector("errorSearch")

formulario.addEventListener('sumbit', function (event) {
    event.preventDefault();
    let valid = true;

    if (campoBusqueda.value === "") {
        errorBusqueda.innerText == 'Porfavor Ccomplete el campo de busqueda';
        errorBusqueda.style.display = 'block';
        valid = false;
    }
    else if (campoBusqueda.value.lenght < 3) {
        errorBusqueda.innerText == 'El termino de busqueda debe tener al menos 3 caracteres';
        errorBusqueda.style.display = 'block';
        valid = false;
    }
    if (valid) {
        formulario.sumbit();
    }
});