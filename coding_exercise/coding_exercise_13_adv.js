'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 0
}

function isBudgetEnough(data) {
    const allShops = data.shops;
    const mallHeight = data.height;
    
    let shopsSquare = 0;
    
    for (let i = 0; i < allShops.length; i++){
        shopsSquare += allShops[i].width * allShops[i].length
    }
    
    const shopsVolume = shopsSquare * mallHeight;
    const value = data.moneyPer1m3;
    const shopBudget = data.budget;

    if(shopBudget - (shopsVolume * value) >= 0) {
        return 'Бюджета достаточно'
    } else {
        return 'Бюджета недостаточно'
    }

}
console.log(isBudgetEnough(shoppingMallData));