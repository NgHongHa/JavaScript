// indexOf
let s1 = " học học nữa học mãi";
let s2 = s1.indexOf("n"); //tìm kí tự n từ vị trí đầu tiên
let s3 = s1.indexOf("n", 4); // tìm kí tự n từ vị trí thứ 4
// nếu ko tồn tại thì trả về -1
// lastindexOf
let s4 = s1.lastIndexOf("h");
console.log(s4); // chữ h cuối nằm ở index 13
let s5 = s1.lastIndexOf("h", 6);
console.log(s5); // chữ h cuối của khoảng đầu đến 6 nằm ở index 5

// nếu ko tồn tại thì trả về -1

//  includes chỉ kiểm tra có hay không trả về true false
s6 = s1.includes("n");
console.log(s6);
s7 = s1.includes("n", 10);
console.log(s7);
