// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
    let myCourse = 'Full-Stack Web Development Course - 100DaysOfCode Challenge';

//    - A variable that stores the price of that course
    let coursePrice = 350000;

//    - A variable that stores the three main goals that you have, when taking this course
    let mainGoals = ['To enhance my knowledge in JavaScript and it\'s frameworks\n', 'To make me practice more on Document Object Manipulation\n', 'To increase my Back-End knowledge'];

// 2) Output ("alert") the three variable values
    alert(myCourse);
    alert(coursePrice);
    alert(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

// using object to call many arrays
    let course = {myCourse, coursePrice, mainGoals};

    // outputing object
    alert(course.myCourse);

// 4) Also output the second element in your "main goals" variable
    alert(mainGoals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result