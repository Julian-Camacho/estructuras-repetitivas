const gatos1 = document.getElementById('gatos1');
const gatos2 = document.getElementById('gatos2');
const pasos2 = document.getElementById('pasos2');
const gatos3 = document.getElementById('gatos3');
const pasos3 = document.getElementById('pasos3');
const letra = document.getElementById('letra');
const resultadoUno = document.querySelector('.resultado-uno');
const resultadoDos = document.querySelector('.resultado-dos');
const resultadoTres = document.querySelector('.resultado-tres');
const resultadoCuatro = document.querySelector('.resultado-cuatro');
const botonUno = document.getElementById('calc-uno');
const botonDos = document.getElementById('calc-dos');
const botonTres = document.getElementById('calc-tres');
const botonCuatro = document.getElementById('calc-cuatro');


function ejercicioUno(cantidad) {
    // Un array con emojis de gatos para poder hacer la secuencia
    const gatos = ['😺', '😸', '😹'];
    let result = '';

    for (let i = 0; i < cantidad; i++) {
        // Uso el módulo para que el índice no se pase del largo del array
        let gato = gatos[i % gatos.length];
        // Concatenamos el resultado con el número de gato y el emoji correspondiente
        result += `<p> Gato #${i+1}: ${gato} </p>`;
    }

    return result;
}

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
        result += `<p> Gato #${i+1}: 🐈 ${pasitos} </p>`;
    }

    return result;
}

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
        result += `<p> Gato #${i+1}: ${gato} ${pasitos} </p>`;
    }

    return result;
}

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

    return (`<p> La letra ${letra} aparece ${contador} veces en la frase. </p>`);
}

// Eventos para los botones

botonUno.addEventListener('click', () => {
    let cantidad = gatos1.value;
    resultadoUno.innerHTML = ejercicioUno(cantidad);
});

botonDos.addEventListener('click', () => {
    let gatos = gatos2.value;
    let pasos = pasos2.value;
    resultadoDos.innerHTML = ejercicioDos(gatos, pasos);
});

botonTres.addEventListener('click', () => {
    let gatos = gatos3.value;
    let pasos = pasos3.value;
    resultadoTres.innerHTML = ejercicioTres(gatos, pasos);
});

botonCuatro.addEventListener('click', () => {
    let letr = letra.value;
    resultadoCuatro.innerHTML = contarLetra(letr);
});