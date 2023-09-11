{
    // Type Assertions: 타입을 강요할 때 💩

    function jsStrFunc(): any {
        return 'hello'; 
    }

    const result = jsStrFunc();
    console.log((result as  string).length);
    console.log((<string>result).length);
    // 변수 as type 혹은 <type>변수 로 타입 장담

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));
    //=> TypeError: wrong.push is not a function
    // app died.

    function findNumber(): number[] | undefined {
        return undefined;
    }
    //const numbers = findNumber();
    //numbers.push(2); //개체가 'undefined'인 것 같습니다

    { //타입을 !로 확신하기(옵션이 아냐! 진짜진짜 확신해! 숫자배열이야!)
      // ? 과 반대 (옵션 선택)
        const numbers = findNumber()!;
        numbers.push(2);

        // const numbers = findNumber();
        // numbers!.push(2);
    }

    const button = document.querySelector('class'); 
    // querySelector 는 요소 이거나 null 뒤에 !를 붙이면 100% 요소가 있어! 하는 것
    // ex) const button = document.querySelector('class')!; 

    if(button){ // 요소가 있는 경우 사용법
        button.nodeValue;
    }
}