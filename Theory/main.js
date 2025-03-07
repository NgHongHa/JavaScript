/**
 [D]rower [O]bject [M]odel
Document node toan bo tai lieu html
Element node dai dien cho 1 ptu
Text node  
Atrribute node

DOM API
 */

//. getAttribute
const firtsLink = document.querySelector("a");
const linkHref = firtsLink.getAttribute("href"); // getAttribute
console.log(linkHref);
firtsLink.setAttribute("target", "blank");
// su dung all the a trong ul
const link = document.querySelectorAll("ul a");
link.forEach((singerlinhk) => {
  singerlinhk.setAttribute("target", "blank"); // setAttribute
});
// Sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");

// hasAttribute
// Kiểm tra xem phần tử có thuộc tính class không ?
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

// .removeAttribute
// Loại bỏ 1 thuộc tính khỏi phần tử
item2.removeAttribute("style");

// Kiểm tra lại xem thuộc tính style đã bị loại bỏ hay chưa?
console.log(item2.hasAttribute("style"));

//Bài tập: Xóa toàn bộ thuộc tính href trong các thẻ a nằm trong ul
// Chọn tất cả các thẻ a trong phần tử ul
const anchorTags = document.querySelectorAll("ul a");

// Lặp qua từng thẻ a và xóa thuộc tính href
anchorTags.forEach((anchor) => {
  anchor.removeAttribute("href");
});
