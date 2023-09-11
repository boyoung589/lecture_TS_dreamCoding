{
    // 타입추론
    // Type Inference: 타입을 명확하게 명시하는 경우가아니라 알아서 자동으로 결정되는 경우

    let text = 'hello'; //let text: string = 'hello'; 하지 않아도 문자열이구나 자동으로 알아챔
    //text = 1; // 숫자 할당하면 error남

    function print(message){ //Worning: (parameter) message: any /'message' 매개 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.
        // => 파라미터 인자는 (타입을 정하지 않아) 암묵적으로 any 타입을 가지고 있어. 타입을 명확하게 명시하는게 좋겠어
        // 기본값을 할당하면 그 기본값의 타입에 따라 파라미터 인자의 타입이 결정됨.
        // ex) function print(message = 'hello') => {}  // print(1) === error
        console.log(message);
    }
    print('hello');
    print(1);

    function add(x: number, y: number){
        return x + y // 자동으로 리턴값의 타입을 숫자타입으로 결정
    }
    const result =  add(1, 2); // 추론의 추론: add라는 함수는 숫자타입을 리턴하므로 변수 result는 숫자타입으로 자동결정.

}