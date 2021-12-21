var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];
function searchByName(arrayName, inputName) {
  for (var i = 0; i < arrayName.length; i++) {
    if (arrayName[i].name === inputName) return arrayName[i];
  }
}
var result = searchByName(fruits, "Apple");
console.log(result);
