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
    
    // for (let i = 0; i < allShops.length; i++){
    //     shopsSquare += allShops[i].width * allShops[i].length
    // }

    allShops.forEach(item => {
        shopsSquare += item.width * item.length
    })
    
    const shopsVolume = shopsSquare * mallHeight;
    const value = data.moneyPer1m3;
    const shopBudget = data.budget;

    if(shopBudget - (shopsVolume * value) >= 0) {
        return 'Enough budget'
    } else {
        return 'Budget is not enough'
    }

}
console.log(isBudgetEnough(shoppingMallData));

// You have a small remnant of mall data that is parsed into a shoppingMallData object. 
// They represent an array of data about markets, where the length
// and width of the premises are indicated; room height;
// the cost of heating per 1 cubic meter and the budget for paying for heating per month.
// The main task is to write an isBudgetEnough functionthat will return a string.
// If there is enough budget for heating the entire shopping center - 'Budget is enough'
// is displayed, if not - 'Budget is not enough'. And that's all 🙂
// But this problem contains several subtasks inside:
// - calculation of the total area of all stores, which is calculated as the length of the store, multiplied by the width;
// - calculation of the total volume of the shopping center, since the price of heating is indicated in cubic meters;
// - determination of whether the budget is enough for expenses of such a volume;
// - all numbers go without units for simplification, just numbers and that's it;
// - the function should continue to work even if the number of stores, height,
// budget is reduced, or another object is substituted.