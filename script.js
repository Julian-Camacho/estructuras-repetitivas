const cantidadDeGatos = 10;

function ejercicioUno(cantidad) {
    // Un array con emojis de gatos para poder hacer la secuencia
    const gatos = ['😺', '😸', '😹'];
    let result = '';

    for (let i = 0; i < cantidad; i++) {
        // Uso el módulo para que el índice no se pase del largo del array
        let gato = gatos[i % gatos.length];
        // Concatenamos el resultado con el número de gato y el emoji correspondiente
        result += `Gato #${i+1}: ${gato}\n`;
    }

    return result;
}
  
console.log(ejercicioUno(cantidadDeGatos));

function ejercicioDos(gatos, pasos) {
    let result = '';
    // Defino una variable para guardar los pasitos
    let pasitos = '';

    for (let i = 0; i < pasos; i++) {
        // Concateno la cantidad de pasitos necesarios
        pasitos += '🐾';
    }

    for (let i = 0; i < gatos; i++) {
        // Concateno el resultado con el número de gato y los pasitos
        result += `Gato #${i+1}: 🐈 ${pasitos}\n`;
    }

    return result;
}

console.log(ejercicioDos(cantidadDeGatos, 3));

function ejercicioTres(gatos, pasos) {
    let result = '';
    let pasitos = '';
    // Defino un array con emojis de gatos para poder hacer la secuencia
    const gatitos = ['🐈', '🐈⬛'];

    for (let i = 0; i < pasos; i++) {
        pasitos += '🐾';
    }

    for (let i = 0; i < gatos; i++) {
        let gato = gatitos[i % gatitos.length];
        result += `Gato #${i+1}: ${gato} ${pasitos}\n`;
    }

    return result;
}

console.log(ejercicioTres(cantidadDeGatos, 5));

function contarLetra(letra) {
    const frase = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sequi dolorem hic fuga distinctio exercitationem repellat possimus aperiam, minus iusto numquam excepturi assumenda quaerat autem ducimus sint nostrum facere magnam.Eveniet amet, consequatur at blanditiis sint neque? Adipisci repudiandae fugiat nobis nostrum autem nemo incidunt ipsum ratione cum. Nam exercitationem quo sapiente impedit deleniti reprehenderit, sequi maiores! Necessitatibus, id magnam? Commodi soluta porro voluptatum, veniam vero aut possimus, consequuntur ea facilis autem ab eius itaque perspiciatis veritatis quas harum excepturi reprehenderit ipsa, eos molestias fugiat laudantium asperiores magnam obcaecati. Ut!";
    // Transformo la frase y la letra a minúsculas para que no haya problemas con las mayúsculas
    const letraMinuscula = letra.toLowerCase();
    const fraseMinuscula = frase.toLowerCase();
    // Inicializo un contador para la cantidad de veces que aparece la letra
    let contador = 0;

    for (let i = 0; i < fraseMinuscula.length; i++) {
        // Si la letra en la posición i de la frase es igual a la letra que estamos buscando, sumamos uno al contador
        if (fraseMinuscula[i] === letraMinuscula) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra('i'));