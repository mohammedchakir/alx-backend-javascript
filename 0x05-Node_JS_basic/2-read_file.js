const fs = require('fs');
const path = require('path');

function countStudents (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    const studentCount = students.length;
    console.log(`Number of students: ${studentCount}`);

    const fields = {};
    students.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const fieldCount = fields[field].length;
        const fieldList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldCount}. List: ${fieldList}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
