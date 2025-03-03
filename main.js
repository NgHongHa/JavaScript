// Các phương thức

//1  concat() nối 2 mảng trả về mảng mới
arr1 = [1, 2, 3];
arr2 = [4, 6, 3];
let arrconcat = arr1.concat(arr2);
console.log(arrconcat);
// push thêm phần tử vào cuối mảng gốc ( làm thay đổi mảng)
arr1.push(9);
console.log(arr1);
// unshift thêm phần tử vào đầu mảng gốc
arr2.unshift(0, 2);
console.log(arr2);
// pop loại bỏ phần tử cuối khỏi mảng, thay đổi mảng gốc, trả về phần tử đã loại bỏ
let arr3 = [2, 3, 4, "nam"];
let remove = arr3.pop();
console.log(remove);
console.log(arr3);
// shift loại bỏ phần tử đầu khỏi mảng, thay đổi mảng gốc, trả về phần tử đã loại bỏ
// slice tạo bản sao
let arr4 = arr2.slice();
console.log("arr2 coppy " + arr4);
// icludes
let check = arr3.includes(2);
console.log(check); // kiểm tra số 2 có trong mảng k
// index of trả về vị trí xuất hiện của phần tử lần đầu tiên nếu có trong mảng
let arr5 = [1, 2, 3, 4, 5, 4, 5, 6, 5];
console.log(arr5.indexOf(5));
// lass index of trả về vị trí xuất hiện của phần tử lần cuối nếu có trong mảng
console.log(arr5.lastIndexOf(5));
// reverse đảo ngược
arr6 = arr5.slice().reverse();
console.log(arr6);
// join
let arr7 = arr6.join();
console.log(arr7);
arr7 = arr6.join("+");
console.log(arr7);
// spice ( vị trí xóa, số phần tử xóa,ptu thêm)
console.log(arr5.splice(2, 3)); // xóa từ index 2 3 ptu
let arr12 = [1, 2, 3, 4];
arr12.splice(1, 2, 6);
console.log(arr12);
