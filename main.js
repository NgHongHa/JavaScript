/* so sánh var let const
var : khai báo sau nhưng nó sẽ đẩy lên trên ( tuy nhiên chỉ khai báo chứ ko khởi tạo giá trị)
let : (sau pb es6) không thể khai báo sau 
note let, const phải khai báo trước, dùng var khai báo sau biến bị hoisted

ví dụ */
console.log(c); // *
var c = 9; // * undefi
let c = 9; // lỗi không sử dụng được\
// phạm vi
//   var có phạm vi của hàm
// let có phạm vi blockscope
