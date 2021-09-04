console.log("hello world! from typescript");

var uname = "user";
// uname = 10; // can's assign number 10 because typescript automatically infers the type for uname

// string array
var names: string[] = ["user1", "user2", "user3"];
names[1] = "test";

// tuple
var subjectMarks: [string, number, number] = ["Marhs", 100, 200];

var marksOrResult: string | number = 20;

console.log(subjectMarks);
console.log(uname);
