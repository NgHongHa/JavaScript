// mảng array js
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);
console.log(array.length); // kiểm tra độ dài
array[3] = 10;
console.log(array);
// duyệt mảng for
for (let i = 0; i < array.length; i++) {
  console.log(array[i] + " Hà");
}
// dùng for off ( chỉ xem)
for (let views of array) {
  console.log(views);
}
