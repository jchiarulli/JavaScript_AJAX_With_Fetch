// Promises - Just the Basic Facts
// wrappers for anything async
// ajax calls, reading files, timeouts,
// geolocation, talk to a database, or anything
// that would use a callback function
// use them to get rid of callback hell
// fetch() returns a Promise

// var result = multiplyTwoNumbers(5, 10); // synchronous
// console.log(result); // 50

// photo would be undefined since downloadPhoto is async
// var photo = downloadPhoto("http://localhost/cat.jpg");

const rand = () => Math.floor(Math.random() * 10) + 1;

let p1 = new Promise((resolve, reject) => {
  let x = 5;
  //   resolve(x); // calling this will call then()
  //   reject(x);
  let num = rand();
  setTimeout(resolve, 1500, num);
});

// fetch().then().then().catch()

p1.then((ex) => {
  console.log(ex);
  return ex * 2;
})
  .then((x) => {
    console.log(x);
  })
  .catch((exx) => {
    console.log("caught", exx);
  });
