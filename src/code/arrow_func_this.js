
//Example of 'this' within object 
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name) //prints fine
        })
    }
}
event.printGuestList();


//Example of 'this' within object with arrow function.
const event2 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList2: () => {
        console.log('Guest list for ' + this.name) //undefined
        console.log('this.guestList: ' + this.guestList); // undefined
        //you cannot use this in arrow function here.
        // this.guestList.forEach((guest) => {
        //     console.log(guest + ' is attending ' + this.name)
        // })
    }
}
event.printGuestList();
event2.printGuestList2();
console.log(typeof event2); //object

//
