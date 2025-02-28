// đệ quy
function giaiThua(N) {
  if (N === 0 || N === 1) {
    return 1;
  } else {
    return N * giaiThua(N - 1);
  }
}
var kq = giaiThua(3);
console.log(kq);
// dãy fibonaci  1 1 2 3 5 8 13 21 ---- fn = f(n-1)+ f(n-2) điểm dừng n <=2 thì fn =1
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}
// gọi hàm
kqf = f(10);
console.log(kqf);
