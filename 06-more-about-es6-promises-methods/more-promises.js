// ES6 Promises - More syntax and examples
// calling resolve directly
// calling reject directly
//

let p1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("p1 resolved");
  } else {
    reject("p1 rejected");
  }
});

let p2 = Promise.resolve("p2 resolved");
let p3 = () => Promise.resolve(null);
let p4 = () => Promise.reject("p4 rejected");

p1.then((result) => {
  console.log("p1:", result);
});
p2.then((result) => {
  console.log("p2:", result);
});

p3().then((result) => {
  console.log("p3:", result);
});
p4()
  .then((result) => {
    console.log("Not resolved");
  })
  .catch((result) => {
    console.log("p4 reject: ", result);
  });
