// la finalidad de este proyecto es crear un programa que pueda entretener al usuario, en la cual gradualmente se implementara nuevas opciones

function game() {

    var eleccion = 0;

    do {
        eleccion = parseInt(prompt('Con que le gustaria entretenerse? \n 1: Palabra en reversa \n 2: Letra por letra \n 0: salir'));
        switch (eleccion) {
            case 1:
                var frase = prompt('ingrese una palabra y lo mostraremos de reversa');
                var nuevaFrase = '';
                for (let i = frase.length - 1; i >= 0; i--) {
                    nuevaFrase += frase[i];
                }
                alert('Salida: ' + nuevaFrase);
                break;
            case 2:
                var frase = prompt('Escriba una palabra y lo mostramos por alerta letra por letra');
                for (let i = 0; i < frase.length; i++) {
                    alert(frase[i]);
                }
                break;
            case 3:
                var parrafo = prompt('ingrese letra o parrafo y detectaremos la cantidad de letras que hay en texto');
                var letra = prompt('Que letra desea averiguar?');
                var cont = 0;
                for (let i = 0; i < parrafo.length; i++) {
                    if (parrafo[i] == letra) {
                        cont++;
                    }
                }
                alert('Lo que ingresaste:' + parrafo + ' tiene ' + cont + ' letra');
                break;
            case 0:
                alert('gracias por jugar!')
            default:
                alert('Opcion incorrecta, elija otra cosa');
        }
    } while (eleccion != 0);
}
game();