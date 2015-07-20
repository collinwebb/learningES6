class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name(){
    return `${this.firstName} ${this.lastName}`;
  }

  set name(value){
    [this.firstName, this.lastName] = value.split(" ");
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, year){
    super(firstName, lastName);
    this.age = age;
    this.year = year;
  }

  get label(){
    return `Name: ${this.name} - Age: ${this.age}`;
  }

}

let student1 = new Student("Gerald", "McAwesome", 42, 2015),
    student2 = new Student("The", "Woo", 9999, 2015),
    student3 = new Student("fuji", "apple", 1, 2015);

console.log(student1.label, student2.label, student3.label);

class Instructor extends Person {
  constructor(firstName, lastName, experience){
    super(firstName, lastName);
    this.experience = experience;
  }

  get label(){
    return `Name: ${this.name} - Experience: ${this.experience}`;
  }
}

let instructor = new Instructor("Samer", "PS", 5);

instructor.name = "Samer Buna";

console.log(instructor);
