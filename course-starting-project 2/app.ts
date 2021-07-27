// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple //
// } = {
//   name: 'Daniel',
//   age: 35,
//   hobbies: ['Hiking', 'Reading'],
//   role: [2, 'author'] // tuple = fixed array: role must have two indexes with a number followed by a string //
// };
// const ADMIN = 0;
// const  READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};

const person = {
  name: 'Daniel',
  age: 35,
  hobbies: ['Hiking', 'Reading'],
  role: Role.ADMIN
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}
