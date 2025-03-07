//Getter and Setter JavaScript
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = id;
    this._score = score; // thêm dấu _ để thể hiện nó ở trạng thái được bảo vệ ( cái này là tự quy ước)
  }
  // phương thức
  calcAger(currentYear) {
    return currentYear - this.birthYear;
  }
  // getter cho thuộc tính
  get score() {
    return this._score;
  }
  // setter cho thuộc tính
  set score(value) {
    // thêm biểu thức logic kiểm tra
    if (vale >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("ko hợp lệ");
    }
  }
}
// tạo đối tượng
const ha = new School("p1", "Ha", 2003, 95);
console.log(ha.id);
