import validator from './validator.js';

// Interaccion con el DOM

const formulario = document.getElementById('formulario')
const mesExpira = document.getElementById('mes')
const expYear = document.getElementById('year')
const nombreTarjeta = document.getElementById('nombreTarjeta')
const numeroTarjeta = document.getElementById('numeroTarjeta')

formulario.botonValidar.addEventListener('click', () => {
    // console.log(validator.isValid('4083952015263'))

    // pone el nombre del input en la tarjeta
    let inputNombre = formulario.nombre.value
    nombreTarjeta.textContent = inputNombre

    // pone el mes en la tarjeta
    let inputMes = formulario.selectMes.value
    mesExpira.textContent = inputMes

    // pone el año en la tarjeta
    let inputYear = formulario.selectYear.value
    expYear.textContent = inputYear

    // validacion del numero de tarjeta
    let valorInput = formulario.numTarjeta.value

    if (validator.isValid(valorInput)) {
        const mensaje = document.getElementById('mensajeExito')
        mensaje.innerHTML = 'Su numero de tarjeta es valida'
        mensaje.style.color = 'green'

        // enmascara el numero de la tarjeta en el input
        formulario.numTarjeta.value = validator.maskify(valorInput)

        // enmascara el numero de la tarjeta y lo pone en la tarjeta
        numeroTarjeta.textContent = validator.maskify(valorInput)

    } else {
        const mensajeInvalida = document.getElementById('mensajeExito')
        mensajeInvalida.innerHTML = 'Su numero de tarjeta es invalida'
        mensajeInvalida.style.color = 'red'
    }
})

// Escoger el mes en el formulario
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option')
    opcion.value = i
    opcion.innerText = i
    formulario.selectMes.appendChild(opcion)
}

// Escoger el año en el formulario
const actualYear = new Date().getFullYear() /* aca obtengo el año actual */

for (let i = actualYear; i <= actualYear + 8; i++) {
    let opcion = document.createElement('option')
    opcion.value = i
    opcion.innerText = i
    formulario.selectYear.appendChild(opcion)
}



