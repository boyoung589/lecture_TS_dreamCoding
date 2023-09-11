{
  /**
   * Print Loading State
   */
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

  printLoginState2({ state: 'loading' }); // 👀 loading...
  printLoginState2({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState2({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState2(state: ResourceLoadState){
    switch(state.state){
      case 'loading':
        console.log(`👀 ${state.state}...`)
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
}
