/**
 * Let's make a calculator 🧮
 */
/*
type ADD = {
    explanation: 'add';
    result: '+';
}

type Substract = {
    explanation: 'substract';
    result: '-';
}

type Multiply = {
    explanation: 'multiplay';
    result: '*';
}

type Divide = {
    explanation: 'divide';
    result: '/'
}

type Remainer = {
    explanation: 'remainer';
    result: '%'
}

type Cal = ADD | Substract | Multiply | Divide | Remainer

const calculate1(cal: Cal, num1: number, num2: number ): number | undefined{
    if(cal.explanation){
        return (num1+ Number(cal.result)+ num2)
    } else{
        console.log('결과가 없습니다.')
    }
}


console.log(calculate1('add', 1, 3)); // 4
console.log(calculate1('substract', 3, 1)); // 2
console.log(calculate1('multiply', 4, 2)); // 8
console.log(calculate1('divide', 4, 2)); // 2
console.log(calculate1('remainder', 5, 2)); // 1
*/
{
    type Cal = 'add'| 'substract'| 'multiply'| 'divide'| 'remainder';
    
    const calculate2=(cal: Cal, num1:number, num2:number)=>{
        switch(cal){
            case 'add':
                return num1 + num2;
            case 'substract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'remainder':
                return num1 % num2;
            // default:
            //     throw new Error('unknown command');
        }
    }
}