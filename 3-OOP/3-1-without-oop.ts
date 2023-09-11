{
    //절차지향적
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    const BEANS_GRAM_PER_SHOT: number = 7; //한 샷당 얼마나 많은 커피 콩이 필요한가?
    let coffeeBeans: number = 0; //얼마나 많은 커피콩이 있는가?

    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        };
    };
    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);

}