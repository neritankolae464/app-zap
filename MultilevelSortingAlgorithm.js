/* 
   Filename: MultilevelSortingAlgorithm.js
   Content: Implementation of a multilevel sorting algorithm for an array of objects.
*/

// Define a class representing a person
class Person {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  // Get the full name of the person
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define an array of persons
const persons = [
  new Person("John", "Doe", 35, "123 Main St"),
  new Person("Alice", "Smith", 28, "456 Elm St"),
  new Person("Bob", "Johnson", 42, "789 Oak St"),
  // ... (more persons)
];

// Define a custom sorting algorithm
function multilevelSort(arr, sortBy) {
  const sortKeys = sortBy.split(',');

  arr.sort((a, b) => {
    for (let i = 0; i < sortKeys.length; i++) {
      const sortKey = sortKeys[i].trim();
      const [key, order] = sortKey.split(':');
      const aValue = a[key];
      const bValue = b[key];

      if (aValue === bValue) {
        continue;
      }

      if (order === 'desc') {
        return bValue.localeCompare(aValue);
      }
      return aValue.localeCompare(bValue);
    }

    return 0;
  });
}

// Sort the persons array by last name, and then by age in descending order
multilevelSort(persons, 'lastName:asc, age:desc');

// Output the sorted persons array
console.log('Sorted Persons:');
for (let person of persons) {
  console.log(`${person.getFullName()}, Age: ${person.age}`);
}

// Output:
// Sorted Persons:
// John Doe, Age: 35
// Bob Johnson, Age: 42
// Alice Smith, Age: 28