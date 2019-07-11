// //  var fullname='dora buji';
// //  const firstname;
// //  if(fullname){
// //     firstname=fullname.split(' ')[0]
// //     console.log(firstname);
// //  }
// //  console.log(firstname);

// const name="Mike Smith";
// let firstname;
// const getFirstname = () => {
//     firstname=name.split(' ')[0]
//     console.log(firstname);
// }
// console.log(firstname)

// getFirstname();

const getFirstname = (fullname) => fullname.split(' ')[0]

console.log(getFirstname('mike smith'))