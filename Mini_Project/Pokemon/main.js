// chọn phần tử cha
// const container = document.getElementById("container");
// tạo phần tử con
let baseUrl = "img";
for (let i = 1; i <= 150; i++) {
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}/${i}.png`;
  // tạo khối div để chứa ảnh và số thứ tự
  const newDiv = document.createElement("div");
  const parentDiv = container.appendChild(newDiv);
  // thêm vào div
  parentDiv.appendChild(newImg);
  // thêm thẻ span để đánh số
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
