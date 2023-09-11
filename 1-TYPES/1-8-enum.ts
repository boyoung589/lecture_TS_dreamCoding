{
    //*Enum: 여러가지 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입

    //JS: 한번 정해지면 바뀌지 않는 특정 고정값을 나타낼 때 변수의 이름을 전부 대문자로 쓴다
    //    JS에는 관련된 요일의 상수를 정하는 경우 서로 연관되어있지만, 묶을 수 있는 enum타입이 따로 존재X
    //    enum을 정의하기 위해선 변수명에 enum이란 것을 표현한 뒤 
    //    Object.freeze({}), 객체를 한번 정하면 수정못하게하는 method를 사용

    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY":2,})
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TS: 다른 언어에서는 enum타입을 유용하게 쓰지만 TS에선 권장하지 않음. 
    //다른 모바일 클라이언트를 사용할 때만 유니언타입을 표현하는 방법이 없으므로 enum타입을 사용.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
    enum Days { 
        // 따로 설정을 추가하지 않으면 0부터 1씩 올라감 ex) Monday = 0, Tuesday = 1
        // Monday = 1 로 설정하면 Tuesday = 2, Wendnesday = 3
        // 문자열로도 설정 가능하지만, 문자열은 자동설정이 안되므로 모든 인자에 문자열로 값을 할당해줘야함.

        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    };
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    // enum으로 할당된 변수에 없는 숫자, 10을 할당해도 에러가 나지 않음. 타입이 보장되지 않음
    day = 10; 
    console.log(day);
    // 상수들을 묶는 타입으로 enum 대신 union타입 사용가능.
    let dayOfWeek: DaysOfWeek = 'Monday';
    // dayOfWeek = 'boyoung' => union에 들어있지 않은 다른 문자열로 재할당 시 에러발생. => 타입보장됨
}