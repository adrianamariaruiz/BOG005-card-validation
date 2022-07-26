
const validator = {
    isValid: function (creditCardNumber) {
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

        if (contador % 10 === 0) {
            return true
        } else {
            return false
        }
    },

    maskify: function (creditCardNumber) {
        const numerosEnmascarar = creditCardNumber.slice(0, -4).replace(/\S/g, '#')
        const ultimosCuatro = creditCardNumber.slice(-4)
        const cadenaNumero = numerosEnmascarar + ultimosCuatro
        return cadenaNumero
    }
};

export default validator;
