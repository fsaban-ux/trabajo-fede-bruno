window.addEventListener ("load", function(){
    let logoutBoton = this.document.querySelector(".botonLogout")
    logoutBoton.addEventListener("click", function(){
        localStorage.clear();

        let usu = document.querySelector (".usuarioSaludo")
        usu.style.display = "none"
        let usunav = document.querySelector (".navLogout")
        usunav.style.display = "none"
    })
})