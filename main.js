// Object
let student = {
  fullName: "Nguyen Hong Ha",
  birthYear: 2003,
  address: {
    city: "HN",
    country: "vn",
  },
  getAge: function () {
    return 2024 - this.birthYear;
  },
};
