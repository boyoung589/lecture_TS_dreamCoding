{
    //discriminated: 차별화하는, 구분할 수 있는
    // 어떤 케이스든 공통적인 property를 갖고 있으므로서 구분하기 쉽게 만든다

    type SuccessState = {
        result: 'success';
        response : {
            body : string;
        };
    };

    type FailState = {
        result: 'fail';
        reason : string;
    }

    type LoginState = SuccessState | FailState;

    function printLoginState(state: LoginState){

        if(state.result === 'success'){
            console.log(`🥂 ${state.response.body}`);
        } else{
            console.log(`😢 ${state.reason}`);
        }
    }
}