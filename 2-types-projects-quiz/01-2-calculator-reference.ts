/**
 * Let's make a calculator 🧮
 */

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command, a: number, b: number): number {
    //command는 임의의 문자열이 아니라 지정된 명령어가 있으므로 union 타입을 쓸 수 있음
    switch(command) {
        case 'add' :
            return a + b;
        case 'substract' :
            return a - b;
        case 'multiply' :
            return a * b;
        case 'divide' :
            return a / b;
        case 'remainder' :
            return a % b;
            default:
            throw new Error('unknown command');
    }
}