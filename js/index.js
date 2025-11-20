let api = "https://dummyjson.com/products?limit=200"

let productsdiv = document.querySelector("#productojava")
let categoriesDiv = document.querySelector(".lista-home")
fetch(api)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos)

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].category == "motorcycle" || productos[i].category == 'vehicle' || productos[i].category == 'smartphones') {
                productsdiv.innerHTML += `<article class="articulobotin">
          <img src=${productos[i].thumbnail} alt="Botin2A"> Botin predator
         <p class="titulos">${productos[i].title}</p>
      <p class="precio">${productos[i].price}</p>
      <button class="vermas"><a href="./product.html?id=${productos[i].id}">Ver mas</a></button>
        </article>`
            }
        }
    })
    .catch ()

 //para errores de busqueda

let formulario = document.querySelector(".formSearch");
        let campoBusqueda = document.querySelector(".inputSearch");
        let errorBusqueda = document.querySelector(".errorSearch");

        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
            let valid = true;

            if (campoBusqueda.value === "") {
                errorBusqueda.innerText = 'Por favor complete el campo de búsqueda';
                errorBusqueda.style.display = 'block';
                valid = false;
            }
            else if (campoBusqueda.value.length < 3) {
                errorBusqueda.innerText = 'El término de búsqueda debe tener al menos 3 caracteres';
                errorBusqueda.style.display = 'block';
                valid = false;
            }
            if (valid) {
                formulario.submit();
            }
        });