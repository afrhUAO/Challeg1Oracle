var almacenamientoDeTexto = "";
var seccionOculta = document.getElementById("ElementoOcultar");
var Btcopiar = document.getElementById("copiarInformacion")
var textoEncriptado = document.getElementById("texto-Encriptado")
function VerificarTextoVacio(entradatexto) {
    var vacio = false;
    if (entradatexto == "") {
        vacio = true
    }
    return vacio

}

function validacionDeFormatoDeTexto(entradaTexto) {
    var ExisteUnDatoNoPermitido = false;
    if (/[A-Z-0-9]/.test(entradaTexto)) {
        ExisteUnDatoNoPermitido = true
    }
    return ExisteUnDatoNoPermitido;
}
function CapturarTexto() {
    var texto = document.getElementById("entradaDeTexo");
    var Encrinptar = true;
    almacenamientoDeTexto = texto.value
    VerificarTextoVacio(almacenamientoDeTexto)
    if (VerificarTextoVacio(almacenamientoDeTexto)) {
        document.getElementById("aviso").innerHTML = "&#x2300 El campo no puede estar vacìo"
        document.getElementById("alerta").innerHTML = "&#x2300 Apenas letras minúsculas y sin acento";
        seccionOculta.classList.remove("ocultar")
        document.getElementById("texto-Encriptado").innerHTML = ""
        Encrinptar = false;
    }

    if (validacionDeFormatoDeTexto(almacenamientoDeTexto)) {
        console.log(almacenamientoDeTexto)
        document.getElementById("aviso").innerHTML = "&#x2300 Apenas letras minúsculas y sin acento";
        document.getElementById("alerta").innerHTML = "";
        seccionOculta.classList.remove("ocultar")
        document.getElementById("texto-Encriptado").innerHTML = ""

        texto.value = ""
        Encrinptar = false;
    }

    if (Encrinptar) {
        var textoEncriptado = Encriptar(almacenamientoDeTexto);
        texto.value = ""
        document.getElementById("aviso").innerHTML = ""
        ocultarSeccion2();
        document.getElementById("texto-Encriptado").innerHTML = textoEncriptado
    }


}

function Encriptar(text) {
    var texfinal ="";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            texfinal = texfinal + "ai"
        }
        else if (text[i] == "e") {
            texfinal = texfinal + "enter"
        }
        else if (text[i] == "i") {
            texfinal = texfinal + "imes"
        }
        else if (text[i] == "o") {
            texfinal = texfinal + "ober"
        }
        else if (text[i] == "u") {
            texfinal = texfinal + "ufar"
        }
        else {
            texfinal = texfinal + text[i]
        }
       
    }
    return texfinal;
}






function ocultarSeccion2() {
    seccionOculta.classList.add("ocultar");
}

function mostrarTexto() {
    EspacioTextoEncriptado.classList.add("motrar");
}

function copiarTexto() {
    textoEncriptado.select();
    document.execCommand('copy')


}

function desencriptar(text) {
    text = text.replace(/ai/g, "a");
    text = text.replace(/enter/g, "e")
    text = text.replace(/imes/g, "i");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text
}


function desencriptarrTexto() {
    var texto = document.getElementById("entradaDeTexo");
    var dencrinptar = true;
    almacenamientoDeTexto = texto.value
    VerificarTextoVacio(almacenamientoDeTexto)
    if (VerificarTextoVacio(almacenamientoDeTexto)) {
        document.getElementById("aviso").innerHTML = "&#x2300 El campo no puede estar vacìo"
        document.getElementById("alerta").innerHTML = "&#x2300 Apenas letras minúsculas y sin acento";
        seccionOculta.classList.remove("ocultar")
        document.getElementById("texto-Encriptado").innerHTML = ""
        dencrinptar = false;
    }

    if (validacionDeFormatoDeTexto(almacenamientoDeTexto)) {
        document.getElementById("aviso").innerHTML = "&#x2300 Apenas letras minúsculas y sin acento";
        document.getElementById("alerta").innerHTML = "";
        seccionOculta.classList.remove("ocultar")
        document.getElementById("texto-Encriptado").innerHTML = ""

        texto.value = ""
        dencrinptar = false;
    }

    if (dencrinptar) {
        var textoEncriptado = desencriptar(almacenamientoDeTexto);
        texto.value = ""
        document.getElementById("aviso").innerHTML = ""
        ocultarSeccion2();
        document.getElementById("texto-Encriptado").innerHTML = textoEncriptado
    }


}



document.getElementById("boton-encriptar").addEventListener("click", CapturarTexto);
document.getElementById("copiarInformacion").addEventListener("click", copiarTexto);
document.getElementById("boton-desencriptar").addEventListener("click", desencriptarrTexto);


