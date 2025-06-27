// console.log('Harry');
// let a = 4;
// let b = 2;
// console.log(a + b);


// console.time("time")
// console.log('time time time time')
// console.timeEnd('time')

// alert("hello this is ok.")

// let a = prompt('Enter a here')
// a = Number.parseInt(a)
// // alert('you enterd a of type ' + (typeof a))
// let write =  confirm('Do you want to write to the page.')
// if (write){
//     document.write(a)
// }
// else{
//     document.write('please allow to write')
// }


// console.log(window)

const canDrive = (age) =>{
   return (age >= 18)? true : false
};

let runAgain = true;
while (runAgain){
    let age = prompt("Enter Your age");
    age = Number.parseInt(age);
    if (age<0){
        console.error("Please enter a valid age.")
        break;
    }
    if (canDrive(age)){
        alert('Yes you can drive')
    }
    else {
        alert('You cannot drive')
    } 
    runAgain = confirm('Do you want to again')
}

