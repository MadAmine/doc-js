let table = [1, 2, 3, 4, 5, 10, 20, 44, 55];

function bis(arr) {
    let minValues = [];
    let maxValues = [];

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    minValues.push(min);
    maxValues.push(max);

    console.log("Min value:", minValues);
    console.log("Max value:", maxValues);
}

bis(table);
