// switch case
let number = "2";
switch (number % 2) {
  case 0:
    console.log("số chẵn");
    break;
  case 1:
    console.log("lẻ");
    break;
  default:
    console.log("không phải số");
}
// ví dụ
let chose = Number(
  prompt(`Chọn cách tìm kiếm:
  1. tìm theo tên tác giả
  2. tìm theo tên nhà xuất bản
  3 tìm theo tiêu đề
  4 tìm theo tên
  `)
);
switch (chose) {
  case 1:
    alert("bạn đã chọn tìm theo tác giả");
    break;
  case 2:
    alert("bạn đã chọn tìm theo nhà xuất bản");
    break;
  case 3:
    alert("bạn đã chọn tìm theo tiêu đề");
    break;
  case 4:
    alert("bạn đã chọn tìm theo tên");
    break;
  default:
    alert("lựa chọn không hợp lệ");
    break;
}
