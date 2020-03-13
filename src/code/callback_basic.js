

//callback: passing function as a parameter to another function.
const getUserDetails = (name, cb) => {
        //use name to get data from API call.
        console.log(name);
        const data = {
            age: 30,
            job_tile: 'Superman_boss'
        }
        cb(data);
}
getUserDetails('Phil', (input) => {
    input.job_tile = 'Security_guard';
    console.log(input);
})
