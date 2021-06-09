//basic fetch
//using jsonplaceholder for the data
//Remember that fetch returns a promise
//HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
//to test with NODE we need to install the node-fetch package
//  npm install node-fetch
// let fetch = require("node-fetch");

//get the details for a random user
const root = "http://jsonplaceholder.typicode.com";
let id = Math.floor(Math.random() * 20) + 1; //id 1 to 20
let uri = root + "/users/" + id;

console.log("FETCH: ", uri);
//any user id higher than 10 will generate a 404 error

fetch(uri)
  .then(function (response) {
    if (response.status == 200) {
      console.log(response.json());
      return response.json();
    } else {
      throw new Error("Invalid user ID");
    }
  })
  .then((data) => {
    console.log("data", data);
    let jsonData = JSON.stringify(data);
    console.log(data);

    let output = document.getElementById("output");
    output.textContent = jsonData;
  })
  .catch((err) => {
    console.log("ERROR: ", err.message);
  });
