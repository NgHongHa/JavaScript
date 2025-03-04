// mỗi đối tượng đều có nguyên mẫu cha mẹ (prototype) trừ object base
let M = new Array();
console.log(typeof M);
console.log(M);
// mỗi đối tượng trong js đều có đối tượng prototype ( nguyên mẫu/ cha mẹ)

function SinhVien(fullName, ID, birthYear, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}
const sv1 = new SinhVien("Nguyen Hong Ha", 1, 2003, "Thanh Hóa");
const sv2 = new SinhVien("Nguyen Ha", 2, 2004, "HN");
// kiểm tra nguyên mẫu cha mẹ đối tượng
console.log(Object.getPrototypeOf(sv1));
