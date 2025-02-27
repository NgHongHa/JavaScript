// toán tử gán
let x1 = 10;
let y1 = 5;
let z1 = x1 + y1;
console.log(x1);
console.log(y1);
console.log(z1);
// gán += -= *= /= %=
let m = 10;
m += 5;
console.log(m);
m -= 5;
console.log(m);
m *= 5;
console.log(m);
m /= 5;
console.log(m);
m %= 5;
console.log(m);
// toán tử ++ -- tiền tố hậu tố (tính tiền tố trước)
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
// let z = x++ - ++y + 1;
//  z = ( x++ = 1) - (y ++ = 3) + 1 = -1
//  y = 3
//  x = 2
console.log(x);
console.log(y);
console.log(z);
