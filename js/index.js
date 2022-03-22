function validaFechaMenor(campo){
    eliminar();
    var bRet = false;
    var dHoy = new Date();
    var dCapt = "";
    if (campo.value == null)
    alert("Faltan datos");
    else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
    bRet = true;
    else
    alert("La fecha debe ser menor a la fecha actual");
    }
    return bRet;
    }

    function validaFecha(valor){
    var dConvertida = null;
    var sAnio = "";
    var sMes = "";
    var sDia = "";
    var nAnio=0, nMes=0, nDia = 0;
    if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
    nDia = parseInt(valor.substring(8), 10);
    nMes = parseInt(valor.substring(5,7), 10);
    nAnio = parseInt(valor.substring(0,4), 10);
    if (nDia <1 || nDia>31)
    alert("El día no es válido")
    else{
    if (nMes <1 || nMes>12)
    alert("El mes no es válido");
    else{
    if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
    nMes==8 || nMes==10 || nMes==12) && nDia > 31)
    alert("El mes tiene máximo 31 días");
    else if ((nMes==4 || nMes==6 || nMes==9 ||
    nMes==11) && nDia > 30)
    alert("El mes tiene máximo 30 días");
    else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
    alert("Febrero tiene 28 días o 29 en bisiesto");
    else{
    dConvertida = new Date();
    dConvertida.setFullYear(nAnio, nMes, nDia);
    }//fin validaci�n día-mes
    }//mes válido
    }//día válido
    creasigno(nDia,nMes);
    }//formato válido
    else{
    alert("No tiene formato de fecha");
    }
    return dConvertida;
    }

   function eliminar(){
    	lista = document.getElementsByTagName('div')[0];
    	if (lista) {
    		padre = lista.parentNode;
    		padre.removeChild(lista);
    	}
    }

    function creasigno(nDia,nMes){
    var newDiv = document.createElement("div");
    var imagen1 = new Image(500,500);
    var n=0;
    var f=0;
    if((nDia>=20) && (nMes==3) || (nDia <=20) && (nMes==4)){
    var newContent = document.createTextNode("Signo aries");
    f=1;
    n="#FFFFFF";
    }
    else if ((nDia>=20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("Signo tauro");
    f=2;
    n="#FFFFFF";
    }
    else if ((nDia>=20) && (nMes==5) || (nDia <=20) && (nMes==6)){
    var newContent = document.createTextNode("Signo geminis");
    f=3;
    n="#FFFFFF";
    }
    else if ((nDia>=20) && (nMes==6) || (nDia <=22) && (nMes==7)){
    var newContent = document.createTextNode("Signo cancer");
    f=4;
    n= "#FFFFFF";
    }
    else if ((nDia>=22) && (nMes==7) || (nDia <=23) && (nMes==8)){
    var newContent = document.createTextNode("Signo leo");
    f=5;
    n="#FFFFFF";
    }
    else if ((nDia>=23) && (nMes==8) || (nDia <=22) && (nMes==9)){
    var newContent = document.createTextNode("Signo virgo");
    f=6;
    n="#FFFFFF";
    }
    else if ((nDia>=22) && (nMes==9) || (nDia <=22) && (nMes==10)){
    var newContent = document.createTextNode("Signo libra");
    f=7;
    n="#FFFFFF";
    }
    else if ((nDia>=22) && (nMes==10) || (nDia <=22) && (nMes==11)){
    var newContent = document.createTextNode("Signo escorpio");
    f=8;
    n="#FFFFFF";
    }
    else if ((nDia>=22) && (nMes==11) || (nDia <=21) && (nMes==12)){
    var newContent = document.createTextNode("Signo sagitario");
    f=9;
    n="#FFFFFF";
    }
    else if ((nDia>=21) && (nMes==12) || (nDia <=21) && (nMes==1)){
    var newContent = document.createTextNode("Signo capricornio");
    f=10;
    n="#FFFFFF";
    }
    else if ((nDia>=21) && (nMes==1) || (nDia <=21) && (nMes==2)){
    var newContent = document.createTextNode("Signo acuario");
    f=11;
    n="#FFFFFF ";
    }
    else if ((nDia>=22) && (nMes==2) || (nDia <=23) && (nMes==3)){
    var newContent = document.createTextNode("Signo picis");
    f=12;
    n="#FFFFFF";
    }
    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
    imagen1.src = 'img/'+f+'.jpg';
    newDiv.appendChild(imagen1);
    newDiv.style="border: 10px solid "+n+"; background-color:#8391A1; text-align:center; font-family: 'Fredoka', sans-serif; font-size: 170%; width: 550px ;height:550px; margin:auto";
}
