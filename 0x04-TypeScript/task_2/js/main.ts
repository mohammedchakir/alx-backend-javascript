// Define DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Define TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Define Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Define Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Define createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Test the createEmployee function
  console.log(createEmployee(200));   // Output: Teacher
  console.log(createEmployee(1000));  // Output: Director
  console.log(createEmployee('$500')); // Output: Director
  