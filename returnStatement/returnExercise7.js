/* Question 7: More Advanced Closure

Write a function configureDevice that takes an id
for a device. It should return a function that accepts a command. 
When this function is called with a command, it should return a string combining the id and the command, e.g.,
"Device 001 execute: reboot"  */


function configureDevice (id) { 
    return function (command) {
        return `Device ${id} execute: ${command}`; 
    }
}

const device1 = configureDevice("001"); 

console.log(device1("reboot"));

