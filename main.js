// do while
// chạy ít nhất 1 lần đầu tiên
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);
// while true
while (true) {
  i++;
  console.log(i); // vòng lặp này luôn đúng =>> vô tận
  if (i >= 10) {
    break;
  }
}
