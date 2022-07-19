
const validator = {
    isValid: function (creditCardNumber) {
        // console.log('valido tarjeta')

        if (creditCardNumber.length === 0) {
            return false
        }
        const arrayNumMultiplicados = [];
        let contador = 0

        for (let index = 0; index < creditCardNumber.length; index++) {
            if ((index) % 2 !== 0) {

                let numero = creditCardNumber[index] * 2

                if (numero > 9) {
                    numero = numero.toString()
                    numero = Number(numero[0]) + Number(numero[1])
                }

                arrayNumMultiplicados.push(numero)

                contador = contador + numero

            } else {
                arrayNumMultiplicados.push(Number(creditCardNumber[index]))

                contador = contador + Number(creditCardNumber[index])
            }

        }

        // console.log(arrayNumMultiplicados)
        // console.log('contador', contador)

        if (contador % 10 === 0) {
            return true
        } else {
            return false
        }
    },

    maskify: function (creditCardNumber) {
        // console.log('funciona')
        const numerosEnmascarar = creditCardNumber.slice(0, -4).replace(/\S/g, '#')
        // console.log(numerosEnmascarar)

        const ultimosCuatro = creditCardNumber.slice(-4)
        // console.log(ultimosCuatro)

        const cadenaNumero = numerosEnmascarar + ultimosCuatro

        return cadenaNumero

    }

};



export default validator;
