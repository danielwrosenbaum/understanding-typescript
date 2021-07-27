const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Daniel',
  age: 35,
  hobbies: ['Hiking', 'Reading']
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
