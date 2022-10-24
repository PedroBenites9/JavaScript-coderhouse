const limiteGasto = 10000;

var cCorriente;
var cCajaAhorro;
var extraccion;

var billetera = 0;

var opcion = parseInt(prompt("Que opereacion desea hacer? \n 1.Ingresar dinero"));
// La idea es que se cree un menu en la cual el usuario pueda elegir accion hacer, luego poder 
// hacer que el mismo pueda insertar, retirar y hacer otras acciones en su cuenta de caja
function introducirDinero() {
    billetera = parseInt(prompt("Cuanto dinero desea ingresar?"));
    cCajaAhorro = billetera;
    return billetera;
}
function extraerDinero() {
    var extraccion = prompt("Cuanto dinero deseas sacar?");
    console.log('Antes:' + billetera);
    billetera = billetera - extraccion;
    console.log('Ahora:' + billetera);
    return billetera;
}

