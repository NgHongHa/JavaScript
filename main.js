// toán tử ba ngôi
// biến = biểu thức 1 ? biểu thức 2 : biểu thức 3
let number = 10;
let mesenger = number >= 0 ? "số dương" : "số âm";
console.log(mesenger);
// nếu đúng thì trả về giá trị trước dấu : sai thì trả về giá trị sau
// có thể dùng toán tử ba ngôi hoặc ifelse mục đích của cái này để so sánh điều kiện thôi
// ví dụ  viết ctrinh nhập điểm
let diem = parseFloat(prompt("nhập vào điểm của bạn"));
let xepLoai =
  diem >= 8
    ? "giỏi"
    : diem < 8 && diem >= 6.5
    ? "khá"
    : diem < 6.5 && diem >= 5
    ? "trung bình"
    : "yếu";
console.log(xepLoai);
