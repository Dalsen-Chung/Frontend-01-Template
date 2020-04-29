const convertStringToNumber = (string, hex = 10) => {
    if (!chars || typeof chars !== 'string') {
        throw new Error('first parameter must be a string')
    }
    let chars = string.split('')
    let number = 0
    let i = 0
    while (i < chars.length && chars[i] != '.') {
        number = number * hex
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++
    }
    (chars[i] === '.') && i++
    let fraction = 1
    while (i < chars.length) {
        fraction = fraction / hex
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction
        i++
    }
    return number
}

const convertNumberToString = (number, hex = 10) => {
    let integer = Math.floor(number)
    let fractionIdx = ('' + number).indexOf('.')
    let fractionLen = ('' + number).length - fractionIdx - 1
    let fraction = (number - integer).toFixed(fractionLen)
    let string = ''
    while (integer > 0) {
        string = integer % hex + string
        integer = Math.floor(integer / hex)
    }
    if (fractionIdx > -1) {
        string += '.'
        while (fractionLen > 0) {
            fraction *= hex
            string += Math.floor(fraction % hex)
            fractionLen--
        }
    }
    return string
}