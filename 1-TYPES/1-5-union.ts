{
    // Union Types: OR / 모든 가능한 케이스 중에 발생할 수 있는 하나의 타입을 할당하고 싶을 때 사용

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction){
        console.log(direction);
    }
    
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    //function: login -> success, fail /성공하면 성공했을 때의 res리턴, 실패하면 실패한 이유 나타내기
    
    // type Login = 'success' | 'fail' ;
    // function login(result: Login){
    //     return result === 'success' ? res.status(200) : console.log({message: err})
    // }

    type SuccessState = {
        response : {
            body : string;
        };
    };

    type FailState = {
        reason : string;
    }
    /*
    function login(): SuccessState | FailState { 
        //login이라는 함수는 SuccessState 혹은 FailState 둘 중 하나의 타입만 값으로 출력한다
        return { //성공일때
            response: {
                body:'logged in!'
            }
        }
    }
    */
    //보기 불편함으로 아래와같이 LoginState라는 타입을 새로 만들어 쓰기도 함
    type LoginState = SuccessState | FailState;

    function login (id :string, password :string):LoginState{
        return {
            response: {
                body: 'logged in!'
            }
        }
    }

    // printLoginState(state)
    // success -> response:{body:}
    // fail -> reason

    function printloginState(state: LoginState){
        //if(typeof(state) === 'SuccessState'){} 
        //'"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"'
        // 및 '"SuccessState"' 형식에 겹침이 없기 때문에 이 조건은 항상 'false'을(를) 반환합니다.

        if('response' in state){
            console.log(`🥂 ${state.response.body}`);
        } else{
            console.log(`😢 ${state.reason}`);
        }
    
    }
}