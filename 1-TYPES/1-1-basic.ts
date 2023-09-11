{ //변수 이름 충돌을 피하기 위해 블럭 작성
    /*

    * JavaScript의 타입 종류
    1. Primitive:원시타입: number, string, boolean, bigint, symbol, null, undefined
    2. Object: function, array...
    */
   
    //in TypeScript
    //number
    const num: number = -6;

    //string
    const str:string = 'hello';

    //boolean
    const boal:boolean = false;

    //undefined: 값이 있는지 없는지 결정되지 않은 상태.
    let name: undefined; //undefined로 한번 선언하면 이외의 값을 재할당할 수 없기 때문에 쓰지 않음.
    let age: number | undefined // or을 사용하여 옵션 넣어줌 유니언타입
    age = undefined;
    age = 1;
    function find(): number | undefined{ //결과값을 찾으면 number타입 리턴 못찾으면 undefined리턴
        return 1;
        //return undefined;
    }

    //null: 값이 비어있다고 나타내 주는 것. 값이 있거나 없거나 둘 중 하나일 때
    let person: null; //null로 한번 선언하면 그 이외의 값을 재할당할 수 없음
    let person2: string | null;

    //unknown: 💩가능하면 쓰지 말것. 어떤종류의 타입이 들어갈 지 알 수 없다
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    //처음 0(number)로 할당을 하더라도, string, boolean등 어떤 타입으로도 재할당가능
    //타입이 없는 JS와 연동할 수 있기 때문에 unknown이 존재.

    //any: 💩어떤 것이든 담을 수 있는 변수. 가능하면 쓰지 말것. 
    let anything: any = 0;
    anything = 'hello'; 

    //void: 함수에서 아무것도 리턴하지 않는 것 (: void)생략가능
    function print (): void {
        console.log('hello');
        return;
    }
    /*
        ex)
        function print(){
            console.log('hello');
        }
    */
   let unusable: void = undefined; 
   //💩위처럼 함수아닌 변수로 사용하는 경우는 없음. void를 선언하면 undefined밖에 할당할 수 없기 때문.

   //never: 리턴하지 않는 함수/ 에러를 던지던지, while문을 돌면서 끝나지 않게 돌리는 것만 가능
   function throwError(message: string): never{ //예상치 못한, 핸들링 못하는 에러를 마주했을 때
       //message -> server(log)  //에러메시지를 서버로 보내서 로그를 남기고, 
       throw new Error(message); //어플리케이션에서 에러를 던져 어플을 죽인다.리턴값이 존재할 수 없다.
       while(true){

       }
   }
   let neverEnding: never; //💩절대 변수 선언에 never 타입을 쓰지 않음.

   //object: 원시타입을 제외한 모든 object타입을 리턴할 수 있음. 배열도 가능 => 가능하면 쓰지않기
   let obj: object = [1, 2, 3];
   function acceptSomeObject(obj: object){

   }
   acceptSomeObject({ name: 'boyoung'});
   acceptSomeObject({ animal: 'cat'});
}