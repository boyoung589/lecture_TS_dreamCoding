{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //public =>  따로 쓰지 않으면 다 퍼블릭
    //private =>  외부에서 볼 수 없고, 접근 할 수 없음
    //protected => 외부에선 접근할 수 없지만, 클래스를 상속한 자식클래스에선 접근 가능1``

    class CoffeeMaker {
 
        private static BEANS_GRAM_PER_SHOT: number = 7;
            //클래스 밖에서 CoffeeMaker.BEANS_GRAM_PER_SHOT 검색해도 샷 한잔에 커피 몇그람 쓰는지 알 수 없게 프라이빗 설정

        private coffeeBeans: number = 0; 
            //외부에서 내부 상태를 직접적으로 변경할 수 없게 하기 위해 프라이빗 설정
        
        private constructor(coffeeBeans: number){
            //const maker = new CoffeeMaker(32); 생성자(new)를 이용하여 object만드는 것을 금지하기 위해선 private로 돌려야함
            //보통 static을 이용해 oj를 만들 수 있는 함수를 제공한다는 것은 생성자로 새로운 인스턴스를 만드는 것을 금지하기 위함.
            //=> constructor을 private로 돌려 static method를 이용하도록 해야함
            this.coffeeBeans = coffeeBeans;
        }

        // **static vs private static 
        // private static은 선언된 클래스 내에서만 접근 가능하고 외부에서는 쓸 수 없음.
        // 내부적으로 상수값이 필요할 때 사용 

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number){ 
            //얼마나 많은 커피콩을 추가할건지 인자로 받아서 추가
            //함수를 이용해서 내부 상태 변경가능하게 많듦.
            if(beans < 0 ){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
    
    // constructor을 private으로 전환하지 않음.
    // const maker = new CoffeeMaker(32);
    // maker.coffeeBeans = 3; 
    //'coffeeBeans' 속성은 private이며 'CoffeeMaker' 클래스 내에서만 액세스할 수 있습니다.
    // maker.fillCoffeeBeans(32) 
    // 로 가능


    // constructor을 private으로 전환
    const maker = CoffeeMaker.makeMachine
    console.log('static함수를 사용해 oject 이용', maker(3));
    //static함수를 사용해 oject 이용 CoffeeMaker { coffeeBeans: 3 }

    //Getter & Setter

    class User {
        // fullName: string;
        get fullName(): string{ //fullName에 접근할 때마다 새로운 데이터를 만들고 개선함
            // 멤버 변수처럼 사용가능 => 변수 = new OJ / 변수.fullName 으로 출력
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4
        get age():number { //읽기전용
            return this.internalAge;
        }
        set age(num: number){ //쓰기전용
            if(num < 0){
                throw new Error('invalid age')
            }
            this.internalAge = num;
            //외부에서 숫자를 바꿔 계산하고 싶을 때,
            //유효성검사 하고싶을 때
        }
        constructor( public firstName: string, private lastName: string ) {
            // this.fullName = `${firstName} ${lastName}`; 
            //먼저 선언되었기 때문에 후에 firstName을 바꾸어도 fullName이 바뀌지 않음 => get이용 필요
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log('유저는???', user);
    // 유저는??? User { firstName: 'Steve', lastName: 'Jobs', fullName: 'Steve Jobs' }
    user.firstName = '엘리';
    console.log('유저의 이름은 바뀌었나요??', user.fullName);
    // 유저의 이름은 바뀌었나요?? Steve Jobs
    // 먼저 선언되었기 때문에 후에 firstName을 바꾸어도 fullName이 바뀌지 않음 => get이용 필요

    // get fullName(){}사용후 user.fullName은?
    // 유저의 이름은 바뀌었나요?? 엘리 Jobs

    user.age = 6;
    console.log('6으로 바뀌었나?',user)
    // 6으로 바뀌었나? User { firstName: 'Steve', lastName: 'Jobs', internalAge: 6 }   
}

/* Q. private로 설정을 해도 왜 internalAge가 보이는 건가요 ?
    일단 console.log 로 User 클래스의 인스턴스인 user 객체를 확인했을 때,  user 객체의 속성 값들인 firstName, lastName, internalAge가 출력되는 것은 정상적인 결과라고 생각합니다.



    public, private, protected 키워드는 "접근제어자"로,

    이름 그대로 해당 키워드가 들어간 멤버 변수나 함수에 대한

    접근을 제어하는 것이지, 어떤 객체를 console.log로 출력했을때

    그 구성요소들을 보여줄지 말지를 결정하는 키워드가 아니니까요.



    interalAge 멤버변수에 public 키워드가 붙은 경우

    const user2 = new User("Jade", "Kim");

    // 아래와 같은 방식으로 InteralAge 멤버변수에 접근하여

    // user2 객체의 InternalAge 값을 변경할 수 있습니다.

    user2.interalAge = 5 



    interalAge 멤버변수에 private 키워드가 붙은 경우

    const user3 = new User("Jade", "Kim");

    // 아래와 같은 방식으로 InteralAge 멤버변수에 접근하여

    // user3 객체의 InternalAge 값을 변경할 수 없습니다.

    user3.interalAge = 5 



    interalAge 멤버변수에 protected 키워드가 붙은 경우

    const user4 = new User("Jade", "Kim");

    // 아래와 같은 방식으로 InteralAge 멤버변수에 접근하여

    // user4 객체의 InternalAge 값을 변경할 수 없습니다.

    user4.interalAge = 5 



    다만, protected는 상속을 받은 클래스 내부에서는 protected가 붙은 멤버 변수에 접근이 가능합니다.

    class User5 extends User {

        changeInternalAge(age: number) {

        this.internalAge = age;

        }

    }

    const user5 = new User5("Jade", "Kim");

    user5.changeInternalAge(5); // working!
*/