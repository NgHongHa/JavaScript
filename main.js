// kiểu chuỗi
// 1 các cách xuất chuỗii
// có 3 cách chuỗi '' "" ``
// quy tắc index trong chuỗi
let ten = "John";
console.log(ten[1]);
// kiểm tra chiều dài của chuỗi
console.log(ten.length);
// cắt chuỗi slice
let fullName = "Nguyen Hong Ha";
let fistName = fullName.slice(7, 11); // 11 là end index nếu ko nhập sẽ ngầm cắt đến cuối chuỗi
console.log(fistName);
//substring
let name = fullName.substring(12, 14);
console.log(name);
/* so sánh slice và substring
nếu nhập chỉ số đầu lớn hơn chỉ số sau
let fistName = fullName.slice(11, 7) trả về chuỗi rỗng ""
let name = fullName.substring(11, 7); trả về kết quả như substring(7, 11)
nếu nhập tham số âm
 - substring sẽ tự hiểu số âm thành số 0
 - slice nếu truyền số âm thì tính từ cuối chuỗi ( ví dụ -1 là kí tự cuối cùng của chuỗi)