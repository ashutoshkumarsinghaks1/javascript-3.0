//Nested if else
/* Nesting is writing if-else inside if-else statements. It can have many
levels
*/

/*
if marks = 33
   if marks >=30
       print "0"

   else
       print "A"

else
   print "better luck next time!"
*/
/*
let marks = 45;

if(marks >= 33){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade: O");
    }else{
        console.log("Grade: A");
    }
}else{
    console.log("Better Luck Next Time!");
}
*/

// output:
//Pass
//Grade: A

let marks = 99;

if(marks >= 33){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade: O");
    }else{
        console.log("Grade: A");
    }
}else{
    console.log("Better Luck Next Time!");
}

// output: 
//Pass
// Grade: O
