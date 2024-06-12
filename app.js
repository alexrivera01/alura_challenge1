function obtenerElemento(elemento){
    //Obtiene el primer elemento de la clase "elemento"
    return document.getElementsByClassName(elemento)[0];
}

function obtenerTextoElemento(elemento){
    return textoElemento =  obtenerElemento(elemento).value;
}

function encriptar(){
    let textoInput = obtenerTextoElemento('input-text');
    limpiarCampoOutput();
    if(textoInput.length == 0){
        mostrarErrorTextoInput();
        mostrarElementosOuput();

    }else{
        let textoEncriptado = encriptarFrase(textoInput);
        limpiarCampoDeMostrarRespuesta();
        mostrarMensaje(textoEncriptado);
        esconderErrorTextoInput();
    }
}

function limpiarCampoOutput(){
    obtenerElemento('text-output').innerHTML = "";
}

function mostrarMensaje(texto){
    obtenerElemento('text-output').innerHTML = texto; 
}

function desencriptar(){
    let textoInput = obtenerTextoElemento('input-text');
    limpiarCampoOutput();
    if(textoInput.length == 0){
        mostrarErrorTextoInput();
        mostrarElementosOuput();
    }else{
        let textoDesencriptado = desencriptarFrase(textoInput);
        limpiarCampoDeMostrarRespuesta();
        mostrarMensaje(textoDesencriptado);
        esconderErrorTextoInput();
    }
}

function encriptarFrase(elemento){
    let textoEncriptado = '';
    for(element of elemento){
        
        switch(element){
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += element;
        }
        console.log("iteracion: " + element + "Res: " + textoEncriptado);
    }
    return textoEncriptado;
}

function desencriptarFrase(textoInput){
    return textoInput.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function limpiarCampoDeMostrarRespuesta(){
    ocultarElemento('contenedor-output-section-not-found');
}

function mostrarElementosOuput(){
    mostarElemento('contenedor-output-section-not-found');
}

function mostrarErrorTextoInput(){
    mostarElemento('error-text-input');
}

function esconderErrorTextoInput(){
    ocultarElemento('error-text-input');
}

function ocultarElemento(elemento){
    obtenerElemento(elemento).classList.add('hidden');
}

function mostarElemento(elemento){
    obtenerElemento(elemento).classList.remove('hidden');
}

function copiar(){
    //TODO:
}