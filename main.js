// hàm function
inputname = prompt("nhập vào tên của bạn");
function xinChao(name) {
  console.log("xin chào " + name);
}
xinChao(inputname);
// ví dụ 2 hàm tính tổng
function tinhTong(a, b) {
  let kq = a + b;
  return kq; // return a +b luôn cũng được
}
console.log(tinhTong(1, 2));
// gán biến cho hàm, lưu giá trị vào biến
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(`tổng điểm =${tongDiem}`);
// truyền giá trị mặc định cho parameters
// nếu chỉ truyền 1 đối số tinhTong(10) thì 10 là giá trị a tuy nhiên cần khai báo giá trị khởi tạo cho b nếu không kết quả trả về sẽ là NaM
//______________________________________________________________________________________

// các cách khai báo hàm trong js
/* fs decration
khai báo tường minh với từ khóa function như trên*/
// Function Expression không có tên hàm
let tich = function (a, b) {
  return a * b;
};
console.log(tich(2, 3));
// arrow function (hàm mũi tên)
let tich2 = (a, b) => a * b;
console.log(tich2(1, 2));
//ví dụ
let muntiplyAndAdd = function (a, b) {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
// arowfunction
let muntiplyAndAddArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
// gọi hàm
console.log(muntiplyAndAdd(3, 5));
console.log(muntiplyAndAddArrow(3, 5));
//___________________________________________________

// hàm gọi hàm
function cong(a, b) {
  return a + b;
} //fs decration
let nhan = (a, b) => a * b; //arowfunction
function congnhan(num1, num2, num3) {
  // gọi hàm cộng
  let sum = cong(num1, num2);
  // gọi hàm nhân
  let pr = nhan(sum, num3);
  return pr;
}
let result = congnhan(1, 2, 3);
console.log(result);
