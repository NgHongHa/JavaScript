let number = [1, 2, 3, 4, 5];
let evennumber = number.filter((vale, index, array) => vale % 2 == 0);
console.log(evennumber);
/*.filter() là một phương thức của mảng trong JavaScript, giúp lọc ra các phần tử thỏa mãn điều kiện.
Hàm callback (value, index, array) => value % 2 == 0 được thực thi cho từng phần tử trong mảng:
value: giá trị của phần tử hiện tại.
index: chỉ mục (vị trí) của phần tử trong mảng.
array: chính mảng number gốc.
Điều kiện value % 2 == 0 kiểm tra xem phần tử có chia hết cho 2 hay không (tức là số chẵn).
*/
