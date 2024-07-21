import { Stack } from "./estruturas.js";
export { baseConverter }

function baseConverter(decNumber, base = 2) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let number = decNumber
    let rem
    let baseString = ''

    if (!(base >= 2 && base <= 36)) {
        return baseString
    }

    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString
}