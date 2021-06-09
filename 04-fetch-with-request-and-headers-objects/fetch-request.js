//fetch using a Request and a Headers objects
//using jsonplaceholder for the data

const uri = "http://jsonplaceholder.typicode.com/users";

//new Request(uri)
//new Request(uri, options)
//options - method, headers, body, mode
//methods:  GET, POST, PUT, DELETE, OPTIONS

// GET - requests some data from the server and
// they're automatically cached, so you'll get the
// same data again and again unless you change
// something in the uri

// POST - giving some new data to the server, and
// get some data sent back to you

// PUT - requesting some information be sent to
// you, but you're also providing some data to the
// server, typically used to do an update to the
// server

// DELETE - deleting some data on the server and
// you get a response sent back to you

// OPTIONS - gets the headers, there is no body
// or data being sent to you, used to test a
// connection is working properly

// Headers - whenever you make a request to the
// server you're getting a response back, when
// you a send a request the request is sent with
// headers

// If you look at the Network tab in the browser-
// tools we'll see the html file is requested,
// then the JS file, and then the request to the
// uri

// We can also see the HTTP status of each request
// 200 means the request worked correctly

// The type tab will tell you the type of the
// request

// Body is used if you're uploading a file,
// sending some data, performing a a POST, PUT,
// or DELETE

// Mode has to do with cors - cross origin
// resource sharing, basically is a policy which
// determines if you're able to get a resource
// back from a domain if you're on a different
// domain
// E.g., if you're on ibm.com and make a request
// for some json data that's coming from
// microsoft.com there will be a policy on the
// server which determines whether or not you are
// able to use that data
// You can make the request and get the data back
// but the cors policy will determine if you have
// access to the data, i.e., view the data and
// use the data in your JS file

//new Headers()
// headers.append(name, value)
// Content-Type, Content-Length, Accept, Accept-Language,
// X-Requested-With, User-Agent

// The above headers are the headers we're
// allowed to use

// Accept deals with the file type we're willing
// to accept
// Accept-Language specifys the language the file
// is written in, i.e., German, French, English,
// etc.
// Content-Type & Content-Length only deal with
// POST & PUT
// If we're uploading a file to the server
// Content-Type specifies the type of file &
// Content-Length specifys the size of the file
// If there is a body then Content-Type & Content-
// Length can be set
// X-Requested-With is a custom header
// A lot of JS frameworks use custom headers
// Use to specify e.g., if something is an AJAX
// request as opposed to someone typing something
// into the search bar in the browser
// The custom fields are being or maybe are
// deprecated
// User-Agent allows you to set a custom
// User-Agent for your scripts

// The heading statement below means we're only
// willing to accept an application/json file
// type
// Append adds headers to the object when it's
// being sent
// If you're updating a header that already exists
// you can use set

let h = new Headers();
h.append("Accept", "application/json");

// let req = new Request(uri, {
//   method: "GET",
//   headers: h,
//   mode: "cors",
// });

let req = new Request(uri, {
  method: "POST",
  headers: h,
  mode: "cors",
});

fetch(req)
  .then((response) => {
    // response.ok usually means the status code
    // received is between 200 - 299 but if the
    // data is already cached from a GEt request
    // the status will be 304 which is also
    // deemed to be ok
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("BAD HTTP stuff");
    }
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log("ERROR:", err.message);
  });
