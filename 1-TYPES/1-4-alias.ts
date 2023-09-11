{
    // Alias: 새로운 타입을 내가 정의할 수 있는 것. 원시타입 뿐만 아니라 obj형태도 가능
    type Text = string;
    const name: Text = 'boyoung';
    const address: Text = 'Korea';
    type Num = number;
    type Student = {  // Student라는 타입을 정의한다
        name: string; // name이라는 스트링타입과
        age: number;  // age라는 넘버타입 속성이 들어온다
    };
    const student: Student = {
        name: 'boyoung',
        age: 28,
    };

    // String Literal Types:  지정 문자열만이 올 수 있음. 다른 값 못씀.
    // => 어디에 쓰는 거지???

    type Name = 'name';
    let boyoungName: Name;
    boyoungName = 'name';
    type Json = 'json';
    const json: Json = 'json';

    type Boal = true;
    const isCat :Boal = true;
}