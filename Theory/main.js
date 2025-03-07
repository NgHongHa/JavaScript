// dinn nghia
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  // phuong thuc
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}
// tao doi tuong cua lop shool
const p1 = new School("p2001", "Ha", 2003);
console.log(p1.name);
// them lop Student ke thua tu School

class Student extends School {
  constructor(id, name, birthYear, major) {
    // ke thua id, name, birthYear, them major
    super(id, name, birthYear);
    this.major = major;
  }
}
const s1 = new School("s2001", "HaStudent", 2003);
console.log(s1.name);
