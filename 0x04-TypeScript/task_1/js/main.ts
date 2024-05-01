// Define Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a function to create a director object
function createDirector(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, options: Partial<Directors>): Directors {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    numberOfReports,
    ...options
  };
}

// Create a director object
const director1: Directors = createDirector('John', 'Doe', true, 'London', 17, {});

console.log(director1);

// Define interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Get the first letter of the firstName
  const firstLetter = firstName.charAt(0);
  // Combine the first letter of the firstName and the full lastName
  return `${firstLetter}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Define interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define StudentClass
class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of StudentClass
const student = new StudentClass("John", "Doe");

// Test the methods
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John
