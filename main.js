// setTimeout
let hello = function () {
  console.log("Helllo");
};
setTimeout(hello, 3000);
setTimeout(() => {
  console.log("hello2");
}, 5000);
// setInterval  lặp đi lặp lại sau time cố định
