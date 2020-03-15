var group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
           (student) => { 
                      // this here refer to group object
                      console.log(this.title + ': ' + student);
                  }
      );
    }
  };
  
  group.showList();

//Notes
// 1- The value of this is usually determined by a functions execution context.
// 2- In the global scope, this refers to the global object (the window object).
// 3- The object that is standing before the dot is what the this keyword will be bound to.
// 4- We can set the value of this explicitly with call(), bind(), and apply()
// 5- When the new keyword is used(a constructor), this is bound to the new object being created.
// 6- Arrow Functions don’t bind this — instead, this is bound lexically (i.e. based on the original context)