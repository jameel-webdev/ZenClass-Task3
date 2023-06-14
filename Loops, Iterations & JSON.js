// JSON iteration over all for loops (for , for in , for of, for Each)
//FOR LOOP
var numbers = [60, 75, 45, 90, 80];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for in loop
var myDetails = {
  Name: "AJ",
  Age: 25,
  YOB: 1997,
};

for (var key1 in myDetails) {
  console.log(myDetails[key1]);
}

//for of loop

var marks = [95, 66, 75, 90, 44];
for (var i of marks) {
  console.log(i);
}

//for each loop

var marks = [60, 75, 45, 90, 80];

marks.forEach(function (mark) {
  console.log(mark);
});

var myresume = [
  {
    "Personal Details": {
      Name: "JAMEEL AHMED",
      Address: {
        FlatNo: "271",
        Street: "Hosaline Road, Santepet",
        District: "Hassan",
        State: "Karnataka",
        Pincode: "573201",
      },
      gmail: "ajahmed4596@gmail.com",
      MobileNO: "7010153390",
    },
    Qualification: {
      Degree: "B E",
      Department: "MECHATROCIS",
      PassedOut: "2017",
      CGPA: "7.98",
    },
    Skils: {
      Technicals: "MERN STACK DEVELOPER",
      SkillLevel: "Intermediate",
      OtherSkills: "Typescript,Angular",
      LanguagesKnown: "Tamil,English,Kannada",
    },
    Projects: {
      MiniLevel: "Design and Fabrication of Wireless Gesture",
      ComapnyProject: "Automation In Horn Air Gap Measuring Machine(ROOTS)",
    },
    Hobbies: "Badminton, Movies, Series",
  },
];
console.log(myresume);
