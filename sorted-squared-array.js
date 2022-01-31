const array = [1, 2, 3, 5, 6, 8, 9];

const sortedSquaredArray = (list) => (
    list.map((number) => number * number)
            .sort((a,b) => a - b)
);

console.log('-------- Sorted Squared Array -------');
console.log(sortedSquaredArray(array));
