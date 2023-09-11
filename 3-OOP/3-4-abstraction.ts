{ //추상화: 정말 필요한 함수만 노출해서 이용자가 간단하게 사용할 수 있게 하는 것
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker { //사용하려면 뭐뭐가 필요한지, 뭐에 필요한지 적어놓은 계약
        makeCoffee(shots: number): CoffeeCup;

    }

    interface CommercialCoffeeMaker { 
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{ //CoffeeMachine이라는 클래스는 CoffeeMaker이란 인터페이스를 구현한 것입니다.
        
        //위 문장으로 implements 를 선언하면 클래스 내부에 interface에 적힌 함수가 반드시 있어야 함
        /* Q. interface에 적힌 makeCoffee 함수가 없을 경우
        'CoffeeMachine' 클래스가 'CoffeeMaker' 인터페이스를 잘못 구현합니다.
        'makeCoffee' 속성이 'CoffeeMachine' 형식에 없지만 'CoffeeMaker' 형식에서 필수입니다.
        */

        private static BEANS_GRAM_PER_SHOT: number = 7;

        private coffeeBeans: number = 0; 
        
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){ 
            if( beans < 0 ){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(): void {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ){
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat():void {
            console.log('heating up...🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots}...☕️`);
            return {
                shots: shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
    }
    // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    // maker.fillCoffeeBeans(32)
    // maker.makeCoffee(2);
    

    // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // // CoffeeMachine은 CoffeeMater라는 인터페이스를 구현한 것이므로 같음.
    // // maker2.fillCoffeeBeans(32) 
    // // interface 에 쓰지 않은 함수는 클래스를 interface명으로 썼을 때 쓸 수 없음.
    // // interface를 사용하면 얼마만큼의 행동을 허용할 것인지를 결정할 수 있음.
    // maker2.makeCoffee(2);

    // const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker3.fillCoffeeBeans(32)
    // maker3.makeCoffee(2);
    // maker3.clean();

    class AmateurUser{
        constructor(private machine: CoffeeMaker) {};
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista{
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur  = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    // grinding beans for 2
    // heating up...🔥
    // Pulling 2...☕️
    // { shots: 2, hasMilk: false }
    pro.makeCoffee();
    //grinding beans for 2
    // heating up...🔥
    // Pulling 2...☕️
    // { shots: 2, hasMilk: false }
    // cleaning the machine...🧼
}
/* Q. 추상화와 캡슐화의 차이

    자, 지금부터 제가 강의에서 언급한 고양이 예제로 조금만 쉽게 설명하도록 노력해 볼께요.



    고양이의 내부 상태 (배고프고, 즐겁고, 기분좋고, 잠오고) 이런것들은 외부에서 설정할 수 있는게 아니예요. 그쵸?

    외부에서 함부로 설정할 수 없는 것들을 private와 같은 접근 제어자를 써서 외부에서 볼 수 없도록 만드는것을 정보 은닉, 캡슐화라고 해요.

    외부에서 접근이 가능하고, 해도 되고, 필요한 것들만 노출하는것도 정보 은닉, 캡슐화라고 해요 :)

    여기서 고양이와 놀아주다 (play)같은 함수만 외부에 노출하는것을 (public으로 설정) 캡슐화라고 해요.

    자, 이런 함수를 외부에서 호출이 가능하도록 만든다고 해서 추상화라고 하지는 않아요. 



    추상화란, 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계예요.

    아, Cat 고양이는 Play라는 함수가 있어. 그리고 모든 동물 Animal과 놀아 줄 수 있어. 그러니깐 Animal 이라는 부모 클래스를 만들어서 play를 할수 있도록 만들어야지!

    class Animal {

        play() {}

    }


    class Cat extends Animal { }


    이렇게 상속을 통해 추상화를 할 수도 있죠 :)

    그러면 동물을 상속하는 모든 동물들은 다 놀아 줄 수 있는 동물일까요?

    조금 잘못된 추상화 같나요? 그러면 또 이렇게 추상화를 해볼 수 있어요


    아, 놀아 줄 수 있는 동물 클래스들이 공통적으로 따라야 하는 함수, 인터페이스는 무엇이 있을까? 아하! Playable 이라는 인터페이스를 만들자



    interface Playable {

        play();

    }


    이제 이 인터페이스를 구현하는 클래스들은 다 놀아줄 수 있는 클래스야!



    class Cat implements Playable {

        play() {

        console.log("재밌게 놀아요옹🐱")

        }

    }


    class Dog implements Playable {

        play() {

        console.log("재밌게 놀아요멍🐶")

        }

    }


    아하! Cat이랑 Dog랑 놀아줄 수 있는 친구들이군!



    class Tiger {

        

    }


    아뉘, Tiger는 Playable 인터페이스를 구현하지 않았네!

    놀아줄 수 없는 클래스구나!



    이런식으로 외부에서 어떻게 이 클래스를 사용할 수 있는지,

    인터페이스나 다른 부모 클래스를 통해 공통적인 기능들을 추출하는 이런 작업들을 추상화라고 볼 수 있어요 💡
*/