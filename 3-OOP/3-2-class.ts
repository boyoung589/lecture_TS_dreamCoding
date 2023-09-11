{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        //BEANS_GRAM_PER_SHOT: number = 7; 
        //클래스 내부에 정해진 숫자. 변하지 않는다.
        //클래스를 이용한  oj에서 공유되는 것들은
        //member 변수로 지정하면 클래스를 이용한 oj 마다 들어있게됨(instance | object level)
        //메모리 낭비될 수 있음 => static을 앞에 붙여서 class레벨로 지정해줘야함.

        /* 결론: 인스턴스마다 새로 만들어줘야 하는 것은 instance|object 레벨로,
                 공유되는 내용이라면 static 붙여서 Class 레벨로만들기 => new Object 선언하지 않아도 사용가능
        */

        static BEANS_GRAM_PER_SHOT: number = 7; //class level => 이 클래스 자체에 있는 것이기 때문에 this가 아니라 '클래스.변수'로 사용
        coffeeBeans: number = 0; //instance(object) level => this.변수명으로 사용가능

        constructor(coffeeBeans: number){
            // 클래스로 인스턴스를 만들 때 호출되는 함수
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if( this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
    }
    
    const maker = new CoffeeMaker(32);
    console.log('maker', maker) 
    /* 
    1. BEANS_GRAM_PER_SHOT: number = 7; 일 때
    => CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 32 }

    2. static BEANS_GRAM_PER_SHOT: number = 7; 일 때
    => CoffeeMaker { coffeeBeans: 32 }
    */
    const maker2 =  new CoffeeMaker(14);
    console.log('maker2', maker2)
    /* 
    1. BEANS_GRAM_PER_SHOT: number = 7; 일 때
    => CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 14 }

    2. static BEANS_GRAM_PER_SHOT: number = 7; 일 때
    => CoffeeMaker { coffeeBeans: 14 }
    */
    const maker3 = CoffeeMaker.makeMachine(3) 
    // static 함수이기 때문에 new CoffeeMaker로 선언하지 않아도 사용가능
    console.log('maker3', maker3)
}