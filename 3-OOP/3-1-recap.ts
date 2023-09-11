{
    type CoffeeCup1 = {
        shots: number;
        hasMilk: boolean;
    }
    const BEANS_GRAM_PER_SHOT1: number = 7;
    let coffeeBeans1: number = 0;
    
    //커피 만드는 함수
    function makeCoffee1(shots: number): CoffeeCup1 {
        //커피콩이 충분한지 확인
        if(coffeeBeans1 < shots * BEANS_GRAM_PER_SHOT1){
            throw new Error(`Not enough coffee beans! We have only ${coffeeBeans1}`)
        }

        //커피 만든 만큼 커피 콩 지워줌
        coffeeBeans1 -= shots * BEANS_GRAM_PER_SHOT1;
        return {
            shots: shots,
            hasMilk: false,
        }
    }
    coffeeBeans1 += 17;
    console.log('만들기 전 커피콩 양', coffeeBeans1)
    const coffee1 = makeCoffee1(2);
    console.log('커피만들기 작동', coffee1)
    console.log('남은 커피콩 양', coffeeBeans1);
}