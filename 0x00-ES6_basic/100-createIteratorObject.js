export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
  
    return {
      next: function () {
        if (currentEmployeeIndex >= departments[currentDepartmentIndex].length) {
          currentEmployeeIndex = 0;
          currentDepartmentIndex++;
        }
  
        if (currentDepartmentIndex >= departments.length) {
          return { done: true };
        }
  
        const employee = departments[currentDepartmentIndex][currentEmployeeIndex];
        currentEmployeeIndex++;
        
        return { value: employee, done: false };
      },
      [Symbol.iterator]: function () {
        return this;
      }
    };
  }
