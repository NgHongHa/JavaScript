const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15
/*
accumulator: Biến tích lũy giá trị trong mỗi lần lặp.
currentValue: Giá trị hiện tại của phần tử trong mảng.
0: Giá trị khởi tạo cho accumulator.