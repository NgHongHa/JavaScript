// // vòng lặp while
// // thực hiện đến khi điều kiện không còn đúng sẽ thoát vòng lặp
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// ví dụ nhập n trong khoảng từ 1 đến 99 nếu nhập sai thì bắt nhập lại
let n = prompt(" nhập vào số  n  (từ 1 đến 99)");
console.log(n);
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt("số bạn nhập ko hợp lệ vui lòng nhập lại"));
}
alert("bạn đã nhập số : " + n);
