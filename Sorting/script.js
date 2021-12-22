function sortBy(newArray, key) {
  if (newArray.length === 0) {
    return newArray;
  }
  new_arr = newArray.slice();
  for (let i = 0; i < new_arr.length; i++) {
    var least = i;
    for (let j = i; j < new_arr.length; j++) {
      if (new_arr[j][key] < new_arr[least][key]) {
        least = j;
      }
    }
    if (least != i) {
      temp = new_arr[i];
      new_arr[i] = new_arr[least];
      new_arr[least] = temp;
    }
  }
  return new_arr;
}
var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
  {
    id: 4,
    name: "NakulNiroula",
  },
  {
    id: 5,
    name: "Abc",
  },
];

var sorted = sortBy(arr, "name");
console.log(sorted);
