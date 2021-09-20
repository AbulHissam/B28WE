// How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

if (obj1["name"] === obj2["name"]) {
  console.log("Both the names are same & " + "Name:" + obj1["name"]);
}
if (obj1["age"] === obj2["age"]) {
  console.log("Both age are same & " + "Age:" + obj2["age"]);
}
