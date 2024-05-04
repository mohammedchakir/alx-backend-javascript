class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    // Verify attribute types
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for name
  get name () {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for length
  get length () {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    // You can add additional validation for students array here if needed
    this._students = newStudents;
  }
}

export default HolbertonCourse;
