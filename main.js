// một số phương thức có sẵn
let person = {
  name: "Ha",
  age: 22,
};
let keys = Object.keys(person); // trả về key
let keys2 = Object.values(person); // trả về value
let entries = Object.entries(person); // trả về cả key và value
// assin sao chép src 1, 2 vàp target
let target = { c: 100 };
let src1 = { a: 0 };
let src2 = { b: 50 };
Object.assign(target, src1, src2);
console.log(target);
// kiểm tra có thuộc tính không
let person2 = {
  name: "Ha",
  age: 22,
};
console.log(person2.hasOwnProperty("name")); // kiểm tra trong person2 có thuộc tính name không
Object.freeze(person2); // đóng băng đối tượng không thể thêm  sửa xóa
let person3 = {
  name: "Ha",
  age: 12,
};
Object.seal(person3); // chỉ sửa không thêm xóa được
