import { Stack } from "./estruturas.js";

const stack = new Stack()
stack.push(1)
stack.push(5)
stack.push(51)
stack.push(17)
stack.push(22)
stack.push(13)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.toString())