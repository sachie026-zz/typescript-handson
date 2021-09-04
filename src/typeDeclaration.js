"use strict";
console.log("hello world! from typescript");
var uname = "user";
// uname = 10; // can's assign number 10 because typescript automatically infers the type for uname
// string array
var names = ["user1", "user2", "user3"];
names[1] = "test";
// tuple
var subjectMarks = ["Marhs", 100, 200];
console.log(subjectMarks);
console.log(uname);
