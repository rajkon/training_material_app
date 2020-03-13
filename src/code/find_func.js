//functions on arrays (find, map, reduce, filter, push, pop, slice, splice, every, some )
const users = [{
    name: 'Andrew Mead',
    age: 27
  },{
    name: 'George Hudson',
    age: 72
  },{
    name: 'Clay Klay',
    age: 45
  }]
  const user = users.find((user) => user.name === 'George Hudson')
  let type_res = user instanceof Object;
  console.log(' type of the variable "user" object ? ' + type_res);
  console.log(user) // Will print the second object in the array