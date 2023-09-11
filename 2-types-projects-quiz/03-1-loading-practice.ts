{
  /**
   * Print Loading State
   */
  // type LoadingState = {
  //   state: 'loading';
  // };

  // type SuccessState = {
  //   state: 'success';
  //   response: {
  //     body: string;
  //   };
  // };

  // type FailState = {
  //   state: 'fail';
  //   reason: string;
  // };

  // type ResourceLoadState = LoadingState | SuccessState | FailState;

  // const printLoginState1 = (resourceState : ResourceLoadState) => {
  //   // console 창에 결과값을 표기하기 위해 return 겯과값 하지 않고 console.log(결과값) 했으므로 리턴은 void | any
  //   // A function whose declared type is neither 'void' nor 'any' must return a value.
  //   // console안의 값이 string 이더라도 const printLoginState1 = (변수):string => {}로 나타내면 타입에러 발생
    
  //   if(resourceState.state === 'success') {
  //     console.log('😃 loaded');
  //   } else if(resourceState.state === 'fail') {
  //     console.log('😱 no network');
  //   } else {
  //     console.log('👀 loading...');
  //   }
  // }

  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState1 = (res: ResourceLoadState) => {
    switch(res.state){
      case 'loading':
        return '👀 loading...';
      case 'success':
        return `😃 ${res.response.body}`;
      case 'fail':
        return `😱 ${res.reason}`
      default:
        throw new Error(`response state error ${res}`);
    }
  }
  printLoginState1({ state: 'loading' }); // 👀 loading...
  printLoginState1({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState1({ state: 'fail', reason: 'no network' }); // 😱 no network

  
}
