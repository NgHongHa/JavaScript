// bt
// class cha
class Shape {
  constructor(name) {
    this.name = name;
  }
  // phuong thu tinh dien tic, mac dinh return ve 0
  calcArea() {
    return 0;
  }
}
// lop con hinh vuong
class Square extends Shape {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // ghi de phuong thuc tinh dien tich
  calcArea() {
    return this.size * this.size;
  }
}
// lop con hcm
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  // override phuong thuc tinh dien tich hcn
  calcArea() {
    return this.width * this.height;
  }
}
// toa cac doi tuong hinh
const sq1 = new Square("hinh vuong", 4);
const rec1 = new Rectangle("hcn", 4, 6);
console.log(sq1.calcArea());
console.log(rec1.calcArea());
