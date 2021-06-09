// json-stringify.js
// Lesser known features when using JSON.stringify()
//

let obj = {
  name: "Walter",
  last: "Sobchak",
  age: 50,
  angry: true,
  bestscore: 200,
  armed: true,
};
let log = console.log;
let str;

str = JSON.stringify(obj);
log("1", str);

str = JSON.stringify(obj, ["age", "angry", "last"]);
log("\n2", str);

function replace(key, val) {
  if (typeof val === "number") {
    return undefined;
  } else {
    return val;
  }
}
str = JSON.stringify(obj, replace);
log("\n3", str);

// null for fcn input, puts 4 spaces in front of each key value pair
// basically just formats the output when logging to the console
str = JSON.stringify(obj, null, 4);
log("\n4", str);

str = JSON.stringify(obj, null, "\tX\tX\tX\t");
log("\n5", str);
