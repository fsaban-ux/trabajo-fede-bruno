let formulario = document.querySelector (".form");
let email = document.querySelector ("#email");
let valid_email = document.querySelector (".validacionEmail");
let password = document.querySelector ("#password");
let valid_password = document.querySelector (".validacionPassword");

formulario.addEventListener ('submit', function (event){
    event.preventDefault();
    if (email.value == ""){
        valid_email.innerText = "El campo no puede estar vacio";
        valid_email.style.display = "block";
    }
    else if (password.value == ""){
       valid_password.innerText = "El campo no puede estar vacio";
        valid_password.style.display = "block";
    }
    else if (password.value.length <6){
       valid_password.innerText = "La contrasena debe tener al menos 6 caracteres ";
        valid_password.style.display = "block";
    }
    else {
        localStorage.setItem ('email', email.value);
        this.submit ();
    }
})
