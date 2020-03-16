const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
  }
  // The line below uses destructuring
  const { age, location: loc } = user;
  const { age: age1, location: loc1 } = user;

  console.log('stmnt-1: ' + age + ' ' + loc);
  console.log('stmnt-2: ' + age1 + ' ' + loc1);
  //The age property has been destructured and stored in   . The location property has also been destructured and stored in address.

  //other example.

   // The line below uses destructuring
   const { age: age2, location } = user
   console.log('age2: ', age2);
   console.log('location2: ', location);