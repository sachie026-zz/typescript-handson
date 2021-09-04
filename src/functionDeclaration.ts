// basic function
function sample() {
  return "test";
}

// basic function with return type
function numberSample(): number {
  return 1; // you can;t return data of other type than number
}

// basic function with return type
function parametersSample(marks: number): number {
  return marks; // you can;t return data of other type than number
}

console.log(numberSample());
console.log(parametersSample(89)); // you can't pass data of other type tha number

