console.log("Days of the Week Array");

// 1. Create an array of the days of the week
const days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 2. My calendar says the first day is Sunday....
// Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.pop();  // remove Sunday
days_of_the_week.unshift("Sunday");  // add it to the first potision 

// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days
const days_of_the_week_2 = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    ["Saturday", "Sunday"]
];

// 4. Remove either the weekdays or the weekends
days_of_the_week_2.pop() 

// 5. Sort the remaining days alphabetically 
days_of_the_week_2[0].sort(); // be careful of this method! 