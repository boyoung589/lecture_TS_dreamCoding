{ //변수 이름 충돌을 피하기 위해 블럭 작성
    
    // JavaScript 💩 
    function jsAdd(num1, num2){
        return num1 + num2;
    }

    // TypeScript ✨
    function tsAdd(num1: number, num2:number): number{
        // (num1은 넘버타입, num2는 넘버타입) : 리턴값은 넘버타입
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id){ //어떤 데이터를 fetch하고 promise를 리턴하는 함수
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript ✨
    function tsFetchNum(id: string): Promise<number> {
        // (id는 보통 스트링) : 프로미스 중 숫자데이터를 프로미스 하는 것을 리턴 

        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // JavaScript ✨ => TypeScript js에서도 사용가능하고 ts에서 더 활용도를 높일 수 있는 함수 정의법
    // Optional parameter
    function printName (firstName: string, lastName: string){  
        console.log(firstName);
        console.log(lastName);
    }    
    printName('Steve', 'Jobs');
    /* 정해진 param 갯수와, 타입을 맞춰주지 않으면 에러발생
        ex) printName('Boyoung');
            printName('Boyoung', 0);
        두번째 인자를 전달하지 않을 때도 있거나, 두번째 인자의 타입이 string이 아닐 수도 있는 경우
        => Optional Param 필요
    */
   
    function printName2 (firstName: string, lastName?: string){
    // function printName2 (firstName: string, lastName: string | undefined){
    //  => 이 경우 두번째 param을 비워두면 안됨. 무조건 undefined로 정의 필요
       console.log(firstName);
       console.log(lastName);
    }
    printName2('Steve', 'Jobs');
    printName2('Boyoung');
    printName2('Ann', undefined);
    // => 에러 노발생!!
    

    // Default parameter: param으로 아무것도 전달하지 않을 시 출력될 디폴트값 정하기
    function printMessage(message: string = 'default message'){
        console.log('printMessage', message);
    }
    printMessage(); //'default message'출력

    //Rest parameter: 인자 갯수 상관없이 인자 넣는 것 다 계산하는 함수
    function addNumbers(...num: number[]): number{ //num이란 param은 숫자타입의 배열이고, 결과값은 숫자다
        return num.reduce((a, b) => a + b , 0);
    }
    console.log('addNumbers', addNumbers(1, 2));
    console.log('addNumbers', addNumbers(1, 2, 3, 4));
    console.log('addNumbers', addNumbers(1, 2, 3, 4, 5, 6));
    // addNumbers([1, 2]) => 에러/ param의 타입이 number[] 이어도 rest param이므로 [num]임
}