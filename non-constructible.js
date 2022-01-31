const coins = [5, 7, 1, 1, 2, 3, 22];

const getNonConstructibleChange = (list) => {
    let nonConstructibleChange = 0;

    list.sort((a, b) => a - b);

    list.forEach((coin) => {
        if (coin > nonConstructibleChange + 1) {
            return nonConstructibleChange + 1;
        }

        nonConstructibleChange += coin
    })

    return nonConstructibleChange + 1;
}

console.log('-------- Non-Constructible Change ---------')
console.log(getNonConstructibleChange(coins))
