{
    //Array 정의하기: 두가지 방법으로 배열의 타입 정의 가능
    const fruits: string[] = ['tomato', 'banana'];
    const fruits2: Array<string> = ['tomato', 'banana'];
    
    /* 
    param으로 들어가는 fruits의 값을 함수 내부에서 변경하지 못하게하는 
    readonly 속성을 추가할 경우 변수:배열<타입>정의 불가능 변수: 타입[]만 ok.

    readonly일 경우 fruit.push('cherry')등 파람 변경 불가
    */
    function printArray (fruits: readonly string[]){ // => 일관성, 불변성을 보장하는 것 중요. 더 자주 쓰임
        console.log('printArray',fruits);
    }
    printArray(fruits);
    // function printArray2 (fruits2: readonly Array<string>){ => 에러발생

    // }

    // Tuple: 서로다른 타입을 함께 가질 수 있는 배열 => 권장하지 않음. 
    // 인덱스로 데이터에 접근하지 않으면 데이터 내용을 확인하기 힘듦. => 가독성 떨어짐.
    // interface, type alias, class 로 대체하는 것 권장.
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student; // 구조분해로 사용하는게 그나마 편하게 데이터 뽑는 법.
    //튜플 잘 사용한 예제 : useState(); ✨동적인 데이터 처리에만 사용하기!!!
}