//PRIMER COMENTARIO

let btnforgot = document.getElementsByClassName('forgot')[0]
let transicao = document.getElementsByClassName('transicao')[0]
let hello = document.getElementsByClassName('hello')[0]
let textobaixo = document.getElementsByClassName('textobaixo')[0]
let signup = document.getElementsByClassName('signup')[0]
let esquerda = document.getElementsByClassName('esquerda')[0]
let direita = document.getElementsByClassName('direita')[0]

function trocar() {
    btnforgot.style.color = "blue"
    
}
function trocar2() {
    btnforgot.style.color = "black"
}

function trocalado() {
    // let esquerda = document.getElementsByClassName('esquerda')[0].style = "display:none"
    transicao.style.position = "relative"
    transicao.style.left = "-314px"
    transicao.style.animation = "go-back 1s"
    transicao.style.borderRadius = "15px 0px 0px 15px"

    

    hello.innerHTML = "¡Bienvenido a nuestra dulce comunidad!"
    textobaixo.innerHTML = "Para seguir conectado con nosotros, inicia sesión con tus datos personales"
    signup.value = "Iniciar sesión"
    

    var quadradoLogin = document.querySelector('.quadrado-login');
    quadradoLogin.classList.add('expandido');

    signup.addEventListener('click', trocalado2)
    

}





function trocalado2() {
    transicao.style.position = ""
    transicao.style.left = ""
    transicao.style.borderRadius = "0px 15px 15px 0px"
    transicao.style.animation = "go-front 1s"

    

    hello.innerHTML = "¡Bienvenido de vuelta a nuestra pastelería!"
    textobaixo.innerHTML = "Introduce tus datos personales y comienza tu viaje con nosotros"
    signup.value = "Registrase"
    signup.removeEventListener('click', trocalado2)
}


/*----------------------------------------VALIDAR FORMULARIO --------------------------------------------------------*/ 
function ValidarIniciarSesion(){
    var email = document.getElementById("email");
    var contraseña = document.getElementById("contra");






/*===============VALIDACIONES================================*/ 

    // Validar el correo electrónico

    var emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === "") {
        alert("Ingrese un correo electrónico");
        email.focus();
        return;

    } else if (!emailPatron.test(email.value)) {
        alert("El correo electrónico no es válido. Asegúrate de incluir '@' y un dominio (por ejemplo, user@example.com).");

        email.focus();
        return;


    }


    //Verificar el contraseña
    var patronContra = /^.{6,}$/;

    if (contraseña.value.trim() === "") {
        alert("Ingrese su contraseña");
        contraseña.focus();
        return;
    }
    else if (contraseña.value == "" || !patronContra.test(contraseña.value)) {
        alert("La contraseña debe ser mayor a 5 dijitos");
        contraseña.focus();
        return;
    }

                // Redirigir a la página principal:

    window.location.href = "./paginaPrincipal.html";

}


window.onload = function () {

    document.getElementById("btnIngresar").onclick = function () {
        ValidarFormulario();


    };

}














/**/ 

function ValidarRegistro(){
    var nomApe2 = document.getElementById("nomApe2");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email1");
    var contra = document.getElementById("contra1");
    var contraConfi = document.getElementById("confirContra1");


    

    var patron = null;

/*===============VALIDACIONES================================*/ 

    // Validar el nombre
    var patron = /^[a-zA-ZñÑ\s]{2,}\s[a-zA-ZñÑ\s]{2,}$/;

    // Validar nombre y apellido
    if (!patron.test(nomApe2.value)) {
        if (nomApe2.value.trim() === "") {
            alert("Por favor, ingrese su nombre y apellido.");
            nomApe2.focus();
            return;

        } else {
            var partes = nomApe2.value.split(" ");
            if (partes.length !== 2) {
                alert("Ingrese un nombre y un apellido separados por un espacio.");
                
                nomApe2.focus();
                return;

            } else {
                if (partes[0].length < 2) {
                    alert("El nombre debe tener al menos 2 caracteres.");
                }
                if (partes[1].length < 2) {
                    alert("El apellido debe tener al menos 2 caracteres.");
                }
            }
        }
        nomApe2.focus();
        return;


    }


    // Validar el correo electrónico

    var emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === "") {
        alert("Ingrese un correo electrónico");
        email.focus();
        return;

    } else if (!emailPatron.test(email.value)) {
        alert("El correo electrónico no es válido. Asegúrate de incluir '@' y un dominio (por ejemplo, user@example.com).");

        email.focus();
        return;


    }





//Telefono: un número de 9 dígitos que comienza con 9
var telefonoPat = /^9\d{8}$/;

// Validar número de teléfono

if (telefono.value.trim() === "") {
    alert("Ingrese un número de teléfono");
    telefono.focus();
    return;

} else if (!telefonoPat.test(telefono.value)) {
    alert("Ingrese un número de teléfono válido que comience con 9 y tenga 9 dígitos en total.");

    telefono.focus();
    return;


}





//Verificar el contraseña
var patronContra = /^.{6,}$/;

if (contra.value.trim() === "") {
    alert("Ingrese su contraseña");
    contra.focus();
    return;
} else if (!patronContra.test(contra.value)) {
    alert("La contraseña debe ser mayor a 5 dígitos");
    contra.focus();
    return;
}

/*Verificar confirmación contraseña*/ 
if (contraConfi.value.trim() === "") {
    alert("Confirme su contraseña");
    contraConfi.focus();
    return;
} else if (contra.value !== contraConfi.value) {
    alert("Las contraseñas no coinciden");

    contraConfi.focus();

    return;
}

 // Registro exitoso


 alert("¡Enhorabuena! Tu registro fue exitoso. Ahora podrás descubrir nuestra exquisita variedad de productos.");


  
 nomApe2.value = "";
 telefono.value = "";
 email.value = "";
 contra.value = "";
 contraConfi.value = "";

}


/*-------------------------------RECUPERAR CONTRASEÑA ---------------------------*/ 

function abrirModal() {
    var modal = document.getElementById("modalRecuperar");
    modal.style.display = "block";
  }
  
  function cerrarModal() {
    var modal = document.getElementById("modalRecuperar");
    modal.style.display = "none";
  }
  
  /*contraseña recuperar método*/
  function recuperarContrasenaModal() {


    var emailRecuperar = document.getElementById("emailRecuperarModal");
    var contraseñaRecuperar = document.getElementById("contraRecuperarModal");
    var confirmaContraseña = document.getElementById("ContraConfiRecuperarModal");

  // Validar el correo electrónico

  var emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRecuperar.value.trim() === "") {
      alert("Ingrese un correo electrónico");
      emailRecuperar.focus();
      return;

  } else if (!emailPatron.test(emailRecuperar.value)) {
      alert("El correo electrónico no es válido. Asegúrate de incluir '@' y un dominio (por ejemplo, user@example.com).");

      emailRecuperar.focus();
      return;


  }

//Verificar el contraseña
var patronContra = /^.{6,}$/;

if (contraseñaRecuperar.value.trim() === "") {
    alert("Ingrese su contraseña");
    contraseñaRecuperar.focus();
    return;
} else if (!patronContra.test(contraseñaRecuperar.value)) {
    alert("La contraseña debe ser mayor a 5 dígitos");
    contraseñaRecuperar.focus();
    return;
}

/*Verificar confirmación contraseña*/ 
if (confirmaContraseña.value.trim() === "") {
    alert("Confirme su contraseña");
    confirmaContraseña.focus();
    return;
} else if (confirmaContraseña.value !== contraseñaRecuperar.value) {
    alert("Las contraseñas no coinciden");

    confirmaContraseña.focus();

    return;
}
 // Registro exitoso


 alert("¡Actualización exitosa!");
  
 emailRecuperar.value = "";
 contraseñaRecuperar.value = "";
 confirmaContraseña.value = "";


 cerrarModal();
  


  }







window.onload = function () {

    document.getElementById("btnIngresar").onclick = function () {
        ValidarIniciarSesion();};




    document.getElementById("btnRegistro").onclick = function () {
        ValidarRegistro();}


    document.getElementById("btnRecuperar").onclick = function () {
        recuperarContrasenaModal();
    };




}



