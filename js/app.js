var check = document.querySelector('.check'); // Selector de clase

check.addEventListener('click',idioma); // Evento y funcion

//Funcion 

function idioma() {
    let id=check.checked;

    if(id==true) {
        location.href="es/index.html";
    }
    else {
        location.href="../index.html";   
    }
}