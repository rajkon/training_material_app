//destucture function arguments
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)


//order Red notebook 201

//--------------------
// Another example
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

const inviteLetter = (letterHeading, { guestList }) => {
    guestList.forEach((guest) => {
        if (guest === 'Jen') {
            console.log('Jen you the Special guest! ');
        }
        console.log(letterHeading, guest + ' Please RSVP ! ');
    });
}

inviteLetter('You are invited.', event);

