// const producto = prompt(
//     "Ingrese el número para comprar la bebida respectiva.\n 1. Agua\n 2. Jugo\n 3. Cerveza\n 4. Vino\n 5. Vodka"
// );

// const dinero = prompt("Ingrese el dinero que tiene");

// const precioAgua = 2;
// const precioJugo = 4;
// const precioCerveza = 5;
// const precioVino = 10;
// const precioVodka = 20;


// var frase = prompt('ingrese una palabra y lo presentaremos de otra forma');
// var letra = prompt('Que letra elige para cambiar?');
// var cambiar = prompt('Eliga letra')
// for (let i = 0; i < frase.length; i++) {
//     console.log(frase[i].charAt.)
// }


// var frase = prompt('ingrese una palabra y lo mostraremos de reversa');
// var nuevaFrase = '';
// for (let i = frase.length - 1; i >= 0; i--) {
//     nuevaFrase += frase[i];
// }
// alert('Salida: ' + nuevaFrase);

var parrafo = prompt('ingrese letra o parrafo y detectaremos la cantidad de letras que hay en texto');
var letra = prompt('Que letra desea averiguar?');
var cont = 0;
for (let i = 0; i < parrafo.length; i++) {
    if (parrafo[i] == letra) {
        cont++;
    }
}
alert('Lo que ingresaste:' + parrafo + ' tiene ' + cont + ' letra');