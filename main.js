let s1 = "học học nữa học mãi";
console.log(s1.startsWith("h"));
//startsWith kiểm tra chuỗi có bắt đầu bằng h không

console.log(s1.startsWith("ọ", 1));
//startsWith kiểm tra chuỗi tính từ index1 có bắt đầu bằng h không

console.log(s1.endsWith("i"));
//endsWithWith kiểm tra chuỗi có kết thúc bằng h không

console.log(s1.endsWith("a", 11));
//startsWith kiểm tra chuỗi tính từ đầu đến 10 có kt là a không ( kí tự index 10 có phải a không) ++ nó chỉ kiểm tra đến sát 11 khi nhập vào 11 chưa đến 11
