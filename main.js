// spread toán tử clone mảng
m1 = [1, 2, 3, 4];
m2 = [...m1];
console.log(m2);
function sum(a, b, c) {
  return a + b + c;
}
let number = [1, 2, 3];
let result = sum(...number);
// phương thức sort
// nếu ko truyền tham số so sánh hàm sẽ so sánh giá trị trong unicode rồi sx
// nếu truyền tham số
let m4 = [9, 5, 6, 4, 8];
let sx = m4.sort((a, b) => a - b);
console.log(sx); // sx tăng dần ( a- b lớn hơn 0 thì giữ nguyên, nhỏ hơn 0 thì đảo vị trí)
