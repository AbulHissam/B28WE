class Person {
  constructor(firstName, lastName, age, education, address, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.education = education;
    this.address = address;
    this.nationality = nationality;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
  getAge() {
    return this.age;
  }
  getEducation() {
    return this.education;
  }
  getAddress() {
    return this.address;
  }
  getNationality() {
    return this.nationality;
  }
  getDetails() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      education: this.education,
      address: this.address,
      nationality: this.nationality,
    };
  }
}
const p1 = new Person("John", "Doe", 18, "BE-CSE", "Earth", "Earthian");
console.log(p1.getDetails());
