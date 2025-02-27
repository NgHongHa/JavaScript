// các kiểu dữ liệu trong js
// 1 string
let myString = "đây là chuỗi";
console.log(myString);
console.log(typeof myString);
// number kiểu số (số ngyên hoặc số thực)
let soNguyen = 10;
let soThuc = 3.14;
console.log(soNguyen);
console.log(soThuc);
// kiểu boolen
let check = true;
console.log(typeof check);
// kiểu undefined
let diem;
console.log(typeof diem);
// kiểu null
let bug = null;
console.log(typeof bug); // lỗi này sẽ cho kiểu dữ liệu của null là object
// xuất số nguyên an toàn tối đa và tối thiểu
console.log(" số nguyên an toàn tối đa" + Number.MAX_SAFE_INTEGER);
console.log(" số nguyên an toàn tối thiểu" + Number.MIN_SAFE_INTEGER);
