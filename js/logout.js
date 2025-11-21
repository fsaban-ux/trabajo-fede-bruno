let logoutbtn = document.querySelector ('.logout-btn')

window.addEventListener ("load", function(){
    
    let saludo = this.document.querySelector (".container-log")
    let navLogin = this.document.querySelector (".log")

        logoutbtn.addEventListener("click", function(){
        localStorage.clear();

      saludo.computedStyleMap.displayu = 'none'
      navLogin.style.display = 'block'
        })
})